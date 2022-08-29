import React from 'react';
import PropTypes from 'prop-types';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import NoteFooter from './NoteFooter';

function Note({
  id, title, body, createdAt, archived, onDelete, onArchive,
}) {
  return (
    <article className="note">
      <NoteHeader title={title} />
      <NoteBody body={body} />
      <NoteFooter
        archived={archived}
        createdAt={createdAt}
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </article>
  );
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default Note;
