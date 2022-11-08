import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import ThemeContext from '../contexts/ThemeContext';
import ToggleLocale from './ToggleLocale';
import ROUTES from '../pages/routes';
import LocaleContext from '../contexts/LocaleContext';

function Header() {
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  return (
    <header className={`header ${theme ? 'light' : 'dark'}`}>
      <div className="header__container">
        <h1 className="header__title">
          <Link to={ROUTES.PRIMARY}>notatki</Link>
        </h1>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__link">
              <Link to={ROUTES.PRIMARY}>{locale ? 'Utama' : 'Primary'}</Link>
            </li>
            <li className="header__link">
              <Link to={ROUTES.ARCHIVE}>{locale ? 'Arsip' : 'Archive'}</Link>
            </li>
          </ul>
        </nav>
        <div className="header__buttons">
          <ToggleLocale />
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
