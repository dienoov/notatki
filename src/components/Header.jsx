import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import ThemeContext from '../contexts/ThemeContext';
import ToggleLocale from './ToggleLocale';
import ROUTES from '../pages/routes';
import LocaleContext from '../contexts/LocaleContext';
import AuthContext from '../contexts/AuthContext';
import SignOut from './SignOut';

function Header() {
  const { user } = useContext(AuthContext);
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
            {user.auth ? (
              <>
                <li className="header__link">
                  <Link to={ROUTES.PRIMARY}>{locale ? 'Utama' : 'Primary'}</Link>
                </li>
                <li className="header__link">
                  <Link to={ROUTES.ARCHIVE}>{locale ? 'Arsip' : 'Archive'}</Link>
                </li>
              </>
            ) : (
              <>
                <li className="header__link">
                  <Link to={ROUTES.SIGN_UP}>{locale ? 'Daftar' : 'Register'}</Link>
                </li>
                <li className="header__link">
                  <Link to={ROUTES.SIGN_IN}>{locale ? 'Masuk' : 'Login'}</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="header__buttons">
          <ToggleLocale />
          <ToggleTheme />
          <SignOut />
        </div>
      </div>
    </header>
  );
}

export default Header;
