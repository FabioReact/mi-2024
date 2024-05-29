import { FormEvent, useRef } from 'react';

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = (event: FormEvent) => {
    event.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
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
