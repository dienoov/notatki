import React, { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Main from './Main';
import ThemeContext, {
  getLocalTheme, setLocalTheme, THEME_DARK, THEME_LIGHT,
} from '../contexts/ThemeContext';

function NotatkiApp() {
  const [theme, setTheme] = useState(getLocalTheme());

  const toggleTheme = () => {
    setTheme(theme ? THEME_DARK : THEME_LIGHT);
  };

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  useEffect(() => {
    if (theme) document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');

    setLocalTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

export default NotatkiApp;
