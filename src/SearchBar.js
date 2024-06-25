import React, { useState } from 'react';

function SearchBar() {
  const [searchText,setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search: City or by doctor" value={searchText} onChange={handleSearchChange}/>
      <select className="sort-by">
        <option value="relevance">Relevance</option>
        {/* Add more options for sorting */}
      </select>
    </div>
  );
}

export default SearchBar;
