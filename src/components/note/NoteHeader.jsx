import React from 'react';
import PropTypes from 'prop-types';

function NoteHeader({ title }) {
  return (
    <header className="note__header">
      <h3 className="note__title">{title}</h3>
    </header>
  );
}

NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoteHeader;
