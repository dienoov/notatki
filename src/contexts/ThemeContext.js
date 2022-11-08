import React from 'react';

const DARK = 0;
const LIGHT = 1;

const LOCAL_THEME_KEY = 'notatki-theme';

const getLocal = () => +(localStorage.getItem(LOCAL_THEME_KEY) ?? DARK);

const setLocal = (value) => {
  localStorage.setItem(LOCAL_THEME_KEY, value);
};

const ThemeContext = React.createContext({
  theme: getLocal(),
  toggleTheme: () => {},
});

export const THEME_DARK = DARK;
export const THEME_LIGHT = LIGHT;

export const getLocalTheme = getLocal;
export const setLocalTheme = setLocal;

export default ThemeContext;
