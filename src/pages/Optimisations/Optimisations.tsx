import { memo, useCallback, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const Title = memo(({ children }: any) => {
  console.log('Render de Title');
  return <h1>{children}</h1>;
});

const Button = memo(({ callback, children }: any) => {
  console.log('Render of Button', children);
  return <button onClick={callback}>{children}</button>;
});

const Optimisations = () => {
  const { counter, increment, incrementBy, decrement } = useCounter();
  const [number, setNumber] = useState('5');
  const incrementCb = useCallback(() => {
    increment();
  }, []);
  const incrementByCb = useCallback(() => {
    incrementBy(+number);
  }, [number]);
  const result = Math.random()
  return (
    <section>
      <Title>Optimisations</Title>
      <p>Counter: {counter}</p>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <Button callback={incrementCb}>Increment</Button>
      <Button callback={incrementByCb}>Increment by</Button>
      <Button callback={decrement}>Decrement</Button>
    </section>
  );
};

export default Optimisations;
