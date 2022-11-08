import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import LoadingAnimation from '../LoadingAnimation';

function ArchiveNote({ notes, isLoading, fetchNotes }) {
  return (
    <article className="archive">
      <header className="archive__header">
        <h2 className="archive__title">Archive</h2>
      </header>
      <div className="archive__container">
        {isLoading
          ? <LoadingAnimation />
          : notes.map(({
            id, title, body, createdAt, archived,
          }) => (
            <Note
              archived={archived}
              createdAt={createdAt}
              id={id}
              title={title}
              body={body}
              key={id}
              fetchNotes={fetchNotes}
            />
          ))}
        {notes.length === 0
          && <p className="archive__empty">Nothing in Archive</p>}
      </div>
    </article>
  );
}

ArchiveNote.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchNotes: PropTypes.func.isRequired,
};

export default ArchiveNote;
