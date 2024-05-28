import { useCounter } from '../../hooks/useCounter';

const Login = () => {
  const { counter, increment, decrement, reset } = useCounter(15);
  return (
    <section>
      <h1>Login</h1>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default Login;
