import React from 'react';
import PropTypes from 'prop-types';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

function NoteFooter({
  id, createdAt, archived, fetchNotes,
}) {
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <footer className="note__footer">
      <time className="note__date">
        {date}
      </time>
      <div className="note__actions">
        <NoteDeleteButton id={id} fetchNotes={fetchNotes} />
        <NoteArchiveButton id={id} archived={archived} fetchNotes={fetchNotes} />
      </div>
    </footer>
  );
}

NoteFooter.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  fetchNotes: PropTypes.func.isRequired,
};

export default NoteFooter;
