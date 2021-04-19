import React, {useState}  from 'react'

export default function ShelfChanger(props) {

  const [ value, setValue ] = useState(props.shelf)
  
  const handleChange = event => {
    const val = event.target.value;
    setValue(val);
    props.Change(props.book, val)
  }

    return (
      <div className="book-shelf-changer">
        <select value={ value } onChange={handleChange}>
          <option value="change" disabled>
            Change to...
          </option>
          <option value="currentlyReading"> Currently Reading </option>
          <option value="wantToRead"> Want to Read </option>
          <option value="read"> Read </option>
          <option value="none"> None </option>
        </select>
      </div>
    );
}

