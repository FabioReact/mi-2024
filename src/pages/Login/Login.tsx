import { FormEvent, useRef } from 'react';
import { useAuthContext } from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const response = await login({ email, password });
    if (response.success)
      navigate('/profile');
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={onLogin}>
        <label htmlFor='email'>Email</label>
        <input ref={emailRef} type='email' id='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input ref={passwordRef} type='password' id='password' name='password' />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
