import React, { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Main from './Main';
import ThemeContext, {
  getLocalTheme, setLocalTheme, THEME_DARK, THEME_LIGHT,
} from '../contexts/ThemeContext';
import LocaleContext, {
  getLocalLocale, LOCALE_ENGLISH, LOCALE_INDONESIA, setLocalLocale,
} from '../contexts/LocaleContext';
import AuthContext from '../contexts/AuthContext';
import { getUserLogged } from '../utils/network';

function NotatkiApp() {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    auth: true,
  });
  const [theme, setTheme] = useState(getLocalTheme());
  const [locale, setLocale] = useState(getLocalLocale());

  const unauthenticate = () => {
    setUser({
      id: '',
      name: '',
      email: '',
      auth: false,
    });
  };

  const authenticate = async (cb = false) => {
    const { error, data } = await getUserLogged();

    if (error) {
      unauthenticate();
      return false;
    }

    if (cb) cb();

    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      auth: true,
    });

    return true;
  };

  const toggleTheme = () => {
    setTheme(theme ? THEME_DARK : THEME_LIGHT);
  };

  const toggleLocale = () => {
    setLocale(locale ? LOCALE_ENGLISH : LOCALE_INDONESIA);
  };

  const userContext = useMemo(() => ({
    user,
    authenticate,
    unauthenticate,
  }), [user]);

  const themeContext = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const localeContext = useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    if (theme) document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');

    setLocalTheme(theme);
  }, [theme]);

  useEffect(() => {
    setLocalLocale(locale);
  }, [locale]);

  return (
    <AuthContext.Provider value={userContext}>
      <ThemeContext.Provider value={themeContext}>
        <LocaleContext.Provider value={localeContext}>
          <Header />
          <Main />
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default NotatkiApp;
