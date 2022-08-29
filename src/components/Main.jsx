import React from 'react';
import PropTypes from 'prop-types';
import PrimaryNote from './note/PrimaryNote';
import ArchiveNote from './note/ArchiveNote';

function Main({ notes, onDelete, onArchive }) {
  return (
    <main className="main">
      <PrimaryNote notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <ArchiveNote notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </main>
  );
}

Main.propTypes = {
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

export default Main;
