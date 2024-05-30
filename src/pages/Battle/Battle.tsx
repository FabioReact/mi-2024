import { useState } from 'react';
import { Hero } from '../../types/hero';
import { fight } from '../../utils/fight';
import { SelectPlayer } from './SelectPlayer';

const Battle = () => {
  const [first, setFirst] = useState<Hero | null>(null);
  const [second, setSecond] = useState<Hero | null>(null);
  const [winner, setWinner] = useState<Hero | null>(null);
  const onFightHandler = () => {
    if (!first || !second) return;
    const result = fight(first, second);
    setWinner(result);
  };
  const onResetHandler = () => {
    setFirst(null);
    setSecond(null);
  };
  return (
    <section className='flex flex-col items-center'>
      <h1>Battle</h1>
      <div className='flex justify-center gap-40'>
        <SelectPlayer label='first' onSelectHero={setFirst} />
        <SelectPlayer label='second' onSelectHero={setSecond} />
      </div>
      <button disabled={!first && !second} onClick={onFightHandler}>
        Fight
      </button>
      {winner && (
        <>
          <p>{winner.name} smashed his opponent!</p>
          <button onClick={onResetHandler}>Reset</button>
        </>
      )}
    </section>
  );
};

export default Battle;
