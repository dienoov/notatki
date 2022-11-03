import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Detail from '../pages/Detail';

function Main({
  notes, onDelete, onArchive, onSave,
}) {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home notes={notes} onDelete={onDelete} onArchive={onArchive} onSave={onSave} />} />
        <Route path="/note/:id" element={<Detail onDelete={onDelete} notes={notes} onArchive={onArchive} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
  onSave: PropTypes.func.isRequired,
};

export default Main;
