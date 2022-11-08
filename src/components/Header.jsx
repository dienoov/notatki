import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import ThemeContext from '../contexts/ThemeContext';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme ? 'light' : 'dark'}`}>
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
        <div className="header__buttons">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
