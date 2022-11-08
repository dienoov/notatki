import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { archiveNote, unarchiveNote } from '../../utils/network';
import ROUTES from '../../pages/routes';
import LocaleContext from '../../contexts/LocaleContext';

function NoteArchiveButton({ id, archived, fetchNotes }) {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onArchive = async () => {
    if (archived) await unarchiveNote(id);
    else await archiveNote(id);

    if (fetchNotes)fetchNotes();
    else navigate(archived ? ROUTES.PRIMARY : ROUTES.ARCHIVE);
  };

  const svg = archived
    ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
      </svg>
    )
    : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z" clipRule="evenodd" />
      </svg>
    );

  let title;
  if (archived) {
    if (locale) title = 'Pindah ke utama';
    else title = 'Move to Primary';
  } else if (locale) title = 'Pindah ke arsip';
  else title = 'Move to Archive';

  return (
    <button
      type="button"
      className="note__archive"
      title={title}
      onClick={onArchive}
    >
      {svg}
    </button>
  );
}

NoteArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  fetchNotes: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

NoteArchiveButton.defaultProps = {
  fetchNotes: false,
};

export default NoteArchiveButton;
