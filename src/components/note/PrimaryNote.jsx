import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import LoadingAnimation from '../LoadingAnimation';
import Search from '../Search';
import LocaleContext from '../../contexts/LocaleContext';

function PrimaryNote({
  notes, isLoading, fetchNotes, onSearch,
}) {
  const { locale } = useContext(LocaleContext);

  return (
    <article className="primary">
      <header className="primary__header">
        <h2 className="primary__title">{locale ? 'Catatan Utama' : 'Primary Notes'}</h2>
      </header>
      <Search onSearch={onSearch} />
      <div className="primary__container">
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
        && <p className="primary__empty">{locale ? 'Tidak ada catatan' : 'Nothing in primary'}</p>}
      </div>
    </article>
  );
}

PrimaryNote.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchNotes: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default PrimaryNote;
