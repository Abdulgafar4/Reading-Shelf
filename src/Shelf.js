import React from 'react';
import MyBooks from './MyBooks';

function Shelf(props) {
  const booksOnShelf = props.books.filter(book => book.shelf === props.shelf.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map(book => (
            <MyBooks key={book.id} book={book} shelf={props.shelf.key} Change={props.Change} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
