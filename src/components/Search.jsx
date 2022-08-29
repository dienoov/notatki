import React from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch, searchValue }) {
  return (
    <form action="#" className="search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="search__icon">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
      <input
        type="search"
        className="search__input"
        placeholder="Search all notes..."
        value={searchValue}
        onChange={onSearch}
      />
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Search;
