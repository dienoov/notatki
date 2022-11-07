import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../utils/network';
import ROUTES from './routes';

function SignIn() {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [confirm, onConfirmChange] = useInput();

  const navigate = useNavigate();

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!name.length) return alert('Name must not be empty');
    if (!email.length) return alert('Email must not be empty');
    if (!password.length) return alert('Password must not be empty');
    if (!confirm.length) return alert('Confirm Password must not be empty');
    if (password !== confirm) return alert('You must enter the same password twice in order to confirm it');

    const { error } = await register({ name, email, password });

    if (error) return false;

    return navigate(ROUTES.SIGN_IN);
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={onFormSubmit}>
        <h2 className="auth__title">Register</h2>
        <label htmlFor="input-name" className="auth__label">
          <input type="text" id="input-name" className="auth__input" placeholder="Name" value={name} onChange={onNameChange} />
        </label>
        <label htmlFor="input-email" className="auth__label">
          <input type="email" id="input-email" className="auth__input" placeholder="Email" value={email} onChange={onEmailChange} />
        </label>
        <label htmlFor="input-password" className="auth__label">
          <input type="password" id="input-password" className="auth__input" placeholder="Password" value={password} onChange={onPasswordChange} />
        </label>
        <label htmlFor="input-confirm" className="auth__label">
          <input type="password" id="input-confirm" className="auth__input" placeholder="Confirm Password" value={confirm} onChange={onConfirmChange} />
        </label>
        <div className="auth__actions">
          <Link to={ROUTES.SIGN_IN} className="auth__link">Login</Link>
          <button type="submit" className="auth__submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
