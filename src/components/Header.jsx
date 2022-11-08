import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">
          <Link to="/">notatki</Link>
        </h1>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__link"><Link to="/">Primary</Link></li>
            <li className="header__link"><Link to="/archive">Archive</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
