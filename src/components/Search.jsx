import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function Search({ onSearch }) {
  const [search, setSearch] = useState('');
  const { locale } = useContext(LocaleContext);

  const onInput = (ev) => {
    setSearch(ev.target.value);
    onSearch(ev.target.value);
  };

  return (
    <form className="search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="search__icon">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
      <input
        type="search"
        className="search__input"
        placeholder={locale ? 'Cari catatan...' : 'Search notes...'}
        value={search}
        onInput={onInput}
      />
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
