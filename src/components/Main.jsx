import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../pages/routes';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Detail from '../pages/Detail';
import Archive from '../pages/Archive';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Main({
  notes, onDelete, onArchive, onSave,
}) {
  return (
    <main className="main">
      <Routes>
        <Route
          path={ROUTES.PRIMARY}
          element={<Home notes={notes} onDelete={onDelete} onArchive={onArchive} onSave={onSave} />}
        />
        <Route
          path={ROUTES.ARCHIVE}
          element={<Archive notes={notes} onDelete={onDelete} onArchive={onArchive} />}
        />
        <Route
          path={ROUTES.DETAIL}
          element={<Detail onDelete={onDelete} notes={notes} onArchive={onArchive} />}
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={<SignIn />}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={<SignUp />}
        />
        <Route
          path={ROUTES.ANY}
          element={<NotFound />}
        />
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
