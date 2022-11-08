import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

function ToggleTheme() {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <button type="button" onClick={toggleLocale}>
      {locale ? 'ID' : 'EN'}
    </button>
  );
}

export default ToggleTheme;
