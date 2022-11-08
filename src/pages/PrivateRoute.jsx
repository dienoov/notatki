import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import ROUTES from './routes';
import { getAccessToken } from '../utils/network';

function PrivateRoute({ children }) {
  return (getAccessToken()) ? children : <Navigate to={ROUTES.SIGN_IN} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
