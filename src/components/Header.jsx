import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header({ onSearch, searchValue }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">
          <Link to="/">notatki</Link>
        </h1>
        <Search onSearch={onSearch} searchValue={searchValue} />
      </div>
    </header>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Header;
