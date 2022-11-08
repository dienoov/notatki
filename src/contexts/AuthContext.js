import React from 'react';

const AuthContext = React.createContext({
  user: {
    id: '',
    name: '',
    email: '',
    auth: false,
  },
  authenticate: () => {},
  unauthenticate: () => {},
});

export default AuthContext;
