import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import Note from '../components/note/Note';

function Detail({ notes, onDelete, onArchive }) {
  const { id } = useParams();
  const {
    archived, createdAt, title, body,
  } = notes.find((note) => note.id === +id);

  const navigate = useNavigate();

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
      archived={archived}
      createdAt={createdAt}
      id={+id}
      title={title}
      body={body}
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
