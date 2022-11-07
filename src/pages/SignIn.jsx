import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login, putAccessToken } from '../utils/network';
import ROUTES from './routes';

function SignIn() {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const navigate = useNavigate();

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!email.length) return alert('Email must not be empty');
    if (!password.length) return alert('Password must not be empty');

    const { error, data } = await login({ email, password });

    if (error) return false;

    putAccessToken(data.accessToken);

    return navigate(ROUTES.PRIMARY);
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={onFormSubmit}>
        <h2 className="auth__title">Login</h2>
        <label htmlFor="input-email" className="auth__label">
          <input type="email" id="input-email" className="auth__input" placeholder="Email" value={email} onChange={onEmailChange} />
        </label>
        <label htmlFor="input-password" className="auth__label">
          <input type="password" id="input-password" className="auth__input" placeholder="Password" value={password} onChange={onPasswordChange} />
        </label>
        <div className="auth__actions">
          <Link to={ROUTES.SIGN_UP} className="auth__link">Register</Link>
          <button type="submit" className="auth__submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
