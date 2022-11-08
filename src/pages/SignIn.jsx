import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login, putAccessToken } from '../utils/network';
import ROUTES from './routes';
import LocaleContext from '../contexts/LocaleContext';
import AuthContext from '../contexts/AuthContext';

function SignIn() {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const { authenticate } = useContext(AuthContext);
  const { locale } = useContext(LocaleContext);

  const navigate = useNavigate();

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!email.length) return alert(locale ? 'Alamat surel tidak boleh kosong' : 'Email must not be empty');
    if (!password.length) return alert(locale ? 'Kata sandi tidak boleh kosong' : 'Password must not be empty');

    const { error, data } = await login({ email, password });

    if (error) return false;

    putAccessToken(data.accessToken);

    return authenticate(() => navigate(ROUTES.PRIMARY));
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={onFormSubmit}>
        <h2 className="auth__title">{locale ? 'Masuk' : 'Login'}</h2>
        <label htmlFor="input-email" className="auth__label">
          <input type="email" id="input-email" className="auth__input" placeholder={locale ? 'Alamat surel' : 'Email'} value={email} onChange={onEmailChange} />
        </label>
        <label htmlFor="input-password" className="auth__label">
          <input type="password" id="input-password" className="auth__input" placeholder={locale ? 'Kata sandi' : 'Password'} value={password} onChange={onPasswordChange} />
        </label>
        <div className="auth__actions">
          <Link to={ROUTES.SIGN_UP} className="auth__link">{locale ? 'Daftar' : 'Register'}</Link>
          <button type="submit" className="auth__submit">{locale ? 'Masuk' : 'Sign In'}</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
