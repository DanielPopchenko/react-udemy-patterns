import React, { useState, useRef } from 'react';

//  ! DEBOUNCING

// itemKeyFn is needed to make a unique id
const SearchableList = ({ items, itemKeyFn, children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const lastChange = useRef();

  const searchResult = items.filter(
    // ! logic for deriving true or false
    (item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleChange = (e) => {
    //   ! here we chack if we have id in our ref
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    //   ! DEBOUNCING
    //   we write there an id of the timeout
    lastChange.current = setTimeout(() => {
      // here we reset our ref
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
  };

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." onChange={handleChange} />

      <ul>
        {searchResult.map((item, idx) => (
          // ! children as a function
          // itemKeyFn(item) - we pass item there to actually get the data
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
