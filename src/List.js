import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

function List(props)  {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Book Shelf</h1>
        </div>
        <div className="list-books-content">
          <div>
            {props.bookshelves.map(shelf => (
              <Shelf
                key={shelf.key}
                shelf={shelf}
                books={props.books}
                Change={props.Change}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button className="Add-btn"> Add </button>
          </Link>
        </div>
      </div>
    );
  }


export default List;
