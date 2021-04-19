import React from 'react';
import ShelfChanger from './ShelfChanger';

function MyBooks (props) {
 return (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              props.book.imageLinks
                ? props.book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
        <ShelfChanger book={props.book} shelf={props.shelf} Change={props.Change} />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors ? props.book.authors.join(', ') : 'Unknown Author'}
      </div>
    </div>
  </li>
  );
};

export default MyBooks;
