import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { debounce } from "throttle-debounce";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import List from "./List";
import Search from "./Search";

const bookshelves = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
];

function BooksApp() {
  const [Books, setBooks] = useState([]);
  const [mySearch, setMySearch] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books);
      })
      .catch((error) => alert(error.message));
  }, []);

  const ChangeBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .catch((error) => alert(error.message));
    if (shelf === "none") {
      setBooks(Books.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBooks(Books.filter((b) => b.id !== book.id).concat(book));
    }
  };
  const searchBooks = debounce(300, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setMySearch([]);
        } else {
          setMySearch(books);
        }
      });
    } else {
      setMySearch([]);
    }
  });
  const reset = () => {
    setMySearch([]);
  };

  return (
    <div className="app">
      <Route exact path="/">
        <List bookshelves={bookshelves} books={Books} Change={ChangeBook} />
      </Route>
      <Route path="/search">
        <Search
          Books={Books}
          Change={ChangeBook}
          search={mySearch}
          onBookSearch={searchBooks}
          onReset={reset}
        />
      </Route>
    </div>
  );
}

export default BooksApp;
