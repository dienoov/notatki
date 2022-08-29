import React from 'react';
import PropTypes from 'prop-types';

function Main({ notes }) {
  const primary = notes.filter(({ archived }) => !archived);
  const archive = notes.filter(({ archived }) => archived);

  return (
    <main className="main">
      <article className="primary">
        <header className="primary__header">
          <h2 className="primary__title">Primary</h2>
        </header>
        <div className="primary__container">
          {primary.map(({ title, body }) => (
            <article className="note">
              <h3 className="note__title">{title}</h3>
              <p className="note__body">{body}</p>
            </article>
          ))}
          {primary.length === 0
            && <p className="primary__empty">Nothing in Primary</p>}
        </div>
      </article>
      <article className="archive">
        <header className="archive__header">
          <h2 className="archive__title">Archive</h2>
        </header>
        <div className="archive__container">
          {archive.map(({ title, body }) => (
            <article className="note">
              <h3 className="note__title">{title}</h3>
              <p className="note__body">{body}</p>
            </article>
          ))}
          {archive.length === 0
            && <p className="archive__empty">Nothing in Archive</p>}
        </div>
      </article>
    </main>
  );
}

Main.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  })).isRequired,
};

export default Main;
