import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../utils/network';
import ROUTES from './routes';
import LocaleContext from '../contexts/LocaleContext';

function SignIn() {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [confirm, onConfirmChange] = useInput();
  const { locale } = useContext(LocaleContext);

  const navigate = useNavigate();

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!name.length) return alert(locale ? 'Name tidak boleh kosong' : 'Name must not be empty');
    if (!email.length) return alert(locale ? 'Alamat surel tidak boleh kosong' : 'Email must not be empty');
    if (!password.length) return alert(locale ? 'Kata sandi tidak boleh kosong' : 'Password must not be empty');
    if (!confirm.length) return alert(locale ? 'Konfirmasi kata sandi tidak boleh kosong' : 'Password confirmation must not be empty');
    if (password !== confirm) return alert(locale ? 'Kata sandi tidak cocok' : 'Passwords do not match');

    const { error } = await register({ name, email, password });

    if (error) return false;

    return navigate(ROUTES.SIGN_IN);
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={onFormSubmit}>
        <h2 className="auth__title">{locale ? 'Daftar' : 'Register'}</h2>
        <label htmlFor="input-name" className="auth__label">
          <input type="text" id="input-name" className="auth__input" placeholder={locale ? 'Nama' : 'Name'} value={name} onChange={onNameChange} />
        </label>
        <label htmlFor="input-email" className="auth__label">
          <input type="email" id="input-email" className="auth__input" placeholder={locale ? 'Alamat surel' : 'Email'} value={email} onChange={onEmailChange} />
        </label>
        <label htmlFor="input-password" className="auth__label">
          <input type="password" id="input-password" className="auth__input" placeholder={locale ? 'Kata sandi' : 'Password'} value={password} onChange={onPasswordChange} />
        </label>
        <label htmlFor="input-confirm" className="auth__label">
          <input type="password" id="input-confirm" className="auth__input" placeholder={locale ? 'Konfirmasi kata sandi' : 'Password confirmation'} value={confirm} onChange={onConfirmChange} />
        </label>
        <div className="auth__actions">
          <Link to={ROUTES.SIGN_IN} className="auth__link">{locale ? 'Masuk' : 'Login'}</Link>
          <button type="submit" className="auth__submit">{locale ? 'Daftar' : 'Sign Up'}</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
