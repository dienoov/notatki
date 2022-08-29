import React from 'react';
import PropTypes from 'prop-types';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

function NoteFooter({
  id, createdAt, archived, onDelete, onArchive,
}) {
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <footer className="note__footer">
      <time className="note__date">
        {date}
      </time>
      <div className="note__actions">
        <NoteDeleteButton id={id} onDelete={onDelete} />
        <NoteArchiveButton id={id} archived={archived} onArchive={onArchive} />
      </div>
    </footer>
  );
}

NoteFooter.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteFooter;
