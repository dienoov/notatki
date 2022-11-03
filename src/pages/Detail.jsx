import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Note from '../components/note/Note';

function Detail({ notes, onDelete, onArchive }) {
  const { id } = useParams();
  const note = notes.find(({ id: noteId }) => noteId === +id);

  const navigate = useNavigate();

  if (!note) return <Navigate to="/404" />;

  const onDeleteRedirect = (deleteId) => {
    onDelete(deleteId);
    navigate('/');
  };

  const onArchiveRedirect = (archiveId) => {
    onArchive(archiveId);
    navigate('/');
  };

  return (
    <Note
      archived={note.archived}
      createdAt={note.createdAt}
      id={note.id}
      title={note.title}
      body={note.body}
      onDelete={onDeleteRedirect}
      onArchive={onArchiveRedirect}
      detail
    />
  );
}

Detail.propTypes = {
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

export default Detail;
