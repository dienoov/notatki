import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteHeader({ title, id }) {
  return (
    <header className="note__header">
      <Link to={`/note/${id}`}>
        <h3 className="note__title">{title}</h3>
      </Link>
    </header>
  );
}

NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteHeader;
