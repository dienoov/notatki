import React from 'react';

const ENGLISH = 0;
const INDONESIA = 1;

const LOCAL_LOCALE_KEY = 'notatki-locale';

const getLocal = () => +(localStorage.getItem(LOCAL_LOCALE_KEY) ?? 0);

const setLocal = (value) => {
  localStorage.setItem(LOCAL_LOCALE_KEY, value);
};

const LocaleContext = React.createContext({
  locale: getLocal(),
  toggleLocale: () => {},
});

export const LOCALE_ENGLISH = ENGLISH;
export const LOCALE_INDONESIA = INDONESIA;

export const getLocalLocale = getLocal;
export const setLocalLocale = setLocal;

export default LocaleContext;
