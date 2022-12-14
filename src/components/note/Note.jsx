import React from 'react';
import PropTypes from 'prop-types';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import NoteFooter from './NoteFooter';

function Note({
  id, title, body, createdAt, archived, fetchNotes, detail,
}) {
  return (
    <article className={`note ${detail ? 'detail' : ''}`}>
      <NoteHeader title={title} id={id} />
      <NoteBody body={body} />
      <NoteFooter
        archived={archived}
        createdAt={createdAt}
        id={id}
        fetchNotes={fetchNotes}
      />
    </article>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  detail: PropTypes.bool,
  fetchNotes: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Note.defaultProps = {
  detail: false,
  fetchNotes: false,
};

export default Note;
