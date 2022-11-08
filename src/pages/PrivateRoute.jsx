import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import ROUTES from './routes';
import AuthContext from '../contexts/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user.auth ? children : <Navigate to={ROUTES.SIGN_IN} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
