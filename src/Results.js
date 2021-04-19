import React from 'react';
import MyBooks from './MyBooks';

function Results (props) {
  const updateBooks = props.search.map(book => {
    props.Books.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updateBooks.map(book => (
          <MyBooks
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            Change={props.Change}
          />
        ))}
      </ol>
    </div>
  );
};

export default Results;
