import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../pages/routes';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Detail from '../pages/Detail';
import Archive from '../pages/Archive';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from '../pages/PrivateRoute';
import ThemeContext from '../contexts/ThemeContext';

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme ? 'light' : 'dark'}`}>
      <Routes>
        <Route
          path={ROUTES.PRIMARY}
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />
        <Route
          path={ROUTES.ARCHIVE}
          element={(
            <PrivateRoute>
              <Archive />
            </PrivateRoute>
          )}
        />
        <Route
          path={ROUTES.DETAIL}
          element={(
            <PrivateRoute>
              <Detail />
            </PrivateRoute>
          )}
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

export default Main;
