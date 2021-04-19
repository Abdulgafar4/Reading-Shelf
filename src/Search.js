import React from 'react';
import Results from './Results';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function Search (props) {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={props.onReset}>
              Close
            </button>
          </Link>
          <SearchInput onBookSearch={props.onBookSearch} />
        </div>
        <Results
          search={props.search}
          Books={props.Books}
          Change={props.Change}
        />
      </div>
    );
  }


export default Search;
