import React from 'react';
import PropTypes from 'prop-types';
import PrimaryNote from '../components/note/PrimaryNote';
import ArchiveNote from '../components/note/ArchiveNote';
import NewNote from '../components/note/NewNote';

function Home({
  notes, onDelete, onArchive, onSave,
}) {
  return (
    <>
      <PrimaryNote notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <ArchiveNote notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <NewNote onSave={onSave} />
    </>
  );
}

Home.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Home;
