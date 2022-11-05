import React from 'react';
import PropTypes from 'prop-types';
import ArchiveNote from '../components/note/ArchiveNote';

function Archive({
  notes, onDelete, onArchive,
}) {
  return (
    <ArchiveNote notes={notes} onDelete={onDelete} onArchive={onArchive} />
  );
}

Archive.propTypes = {
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

export default Archive;
