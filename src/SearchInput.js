import React, {useState} from 'react';

function SearchInput(props) {

  const [value, setValue ] = useState ('')

  const handleChange = event => {
    const val = event.target.value; 
    setValue (val);
    props.onBookSearch(val);
  }

  return (
       <div className="search-books-input-wrapper">
        <input
          type="text"
          value={value}
          placeholder="Search by title or author"
          onChange={handleChange}
          autoFocus
        />
      </div>
  ) 
}


  export default SearchInput;


  
