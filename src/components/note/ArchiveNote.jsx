import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import LoadingAnimation from '../LoadingAnimation';
import Search from '../Search';
import LocaleContext from '../../contexts/LocaleContext';

function ArchiveNote({
  notes, isLoading, fetchNotes, onSearch,
}) {
  const { locale } = useContext(LocaleContext);

  return (
    <article className="archive">
      <header className="archive__header">
        <h2 className="archive__title">{locale ? 'Catatan terarsip' : 'Archived Notes'}</h2>
      </header>
      <Search onSearch={onSearch} />
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
          && <p className="archive__empty">{locale ? 'Tidak ada catatan terarsip' : 'Nothing in archived'}</p>}
      </div>
    </article>
  );
}

ArchiveNote.propTypes = {
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

export default ArchiveNote;
