import React, { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Main from './Main';
import ThemeContext, {
  getLocalTheme, setLocalTheme, THEME_DARK, THEME_LIGHT,
} from '../contexts/ThemeContext';
import LocaleContext, {
  getLocalLocale, LOCALE_ENGLISH, LOCALE_INDONESIA, setLocalLocale,
} from '../contexts/LocaleContext';

function NotatkiApp() {
  const [theme, setTheme] = useState(getLocalTheme());
  const [locale, setLocale] = useState(getLocalLocale());

  const toggleTheme = () => {
    setTheme(theme ? THEME_DARK : THEME_LIGHT);
  };

  const toggleLocale = () => {
    setLocale(locale ? LOCALE_ENGLISH : LOCALE_INDONESIA);
  };

  const themeContext = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const localeContext = useMemo(() => ({
    locale,
    toggleLocale,
  }));

  useEffect(() => {
    if (theme) document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');

    setLocalTheme(theme);
  }, [theme]);

  useEffect(() => {
    setLocalLocale(locale);
  }, [locale]);

  return (
    <ThemeContext.Provider value={themeContext}>
      <LocaleContext.Provider value={localeContext}>
        <Header />
        <Main />
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NotatkiApp;
