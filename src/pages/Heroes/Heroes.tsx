import { useState } from 'react';
import { Hero } from '../../types/hero';
import { HeroCard } from '../../components/HeroCard';
import { getHeroesByLetter } from '../../api/hero';
import arrayOfLetters from './utils';

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const onSelectLetter = async (letter: string) => {
      setSelectedLetter(letter);
      const data = await getHeroesByLetter(letter);
      setHeroes(data);
  };
  return (
    <section>
      <h1 className='uppercase text-3xl font-thin tracking-widest text-center my-4'>Heroes</h1>
      <ul className='flex justify-center gap-2 font-semibold uppercase'>
        {arrayOfLetters.map((letter) => (
          <li
            key={letter}
            className={selectedLetter === letter ? 'text-red-600 cursor-pointer' : 'cursor-pointer'}
            onClick={() => onSelectLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <div>{heroes && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
    </section>
  );
};

export default Heroes;
