import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function PrimaryNote({ notes, onDelete, onArchive }) {
  const primary = notes.filter(({ archived }) => !archived);

  return (
    <article className="primary">
      <header className="primary__header">
        <h2 className="primary__title">Primary</h2>
      </header>
      <div className="primary__container">
        {primary.map(({
          id, title, body, createdAt, archived,
        }) => (
          <Note
            archived={archived}
            createdAt={createdAt}
            id={id}
            title={title}
            body={body}
            onDelete={onDelete}
            onArchive={onArchive}
            key={id}
          />
        ))}
        {primary.length === 0
        && <p className="primary__empty">Nothing in Primary</p>}
      </div>
    </article>
  );
}

PrimaryNote.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default PrimaryNote;
