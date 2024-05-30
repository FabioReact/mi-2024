import { useEffect, useRef, useState } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import arrayOfLetters from './utils';
import Loader from '../../components/Loader/Loader';
import { useGetHeroesByLetter } from '../../hooks/useGetHeroesByLetter';

const Heroes = () => {
  const mounterRef = useRef(false);
  const [selectedLetter, setSelectedLetter] = useState('a');
  const { heroes, loading, error, load } = useGetHeroesByLetter();

  useEffect(() => {
    console.log('Création uniquement - []');
    return () => {
      console.log('Déstruction - []');
    };
  }, []);

  useEffect(() => {
    if (mounterRef.current) {
      console.log('Uniquement mise à jour de la lettre séléctionnée');
    }
    mounterRef.current = true;
  }, [selectedLetter]);

  useEffect(() => {
    console.log(
      'Création ET mise à jour de la lettre séléctionnée - [selectedLetter: ${selectedLetter}]',
    );
    load(selectedLetter);
    return () => {
      console.log(`Déstruction - [selectedLetter: ${selectedLetter}]`);
    };
  }, [selectedLetter]);

  // Création - Fetch les heros avec la lettre A
  // Mise à jour - Fetch les heros avec la lettre B
  // Destruction - Suppression de tout les abonnements
  const onSelectLetter = async (letter: string) => {
    setSelectedLetter(letter);
  };
  return (
    <section>
      <h1>Heroes</h1>
      <ul className='flex justify-center gap-2 font-semibold uppercase mb-8'>
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
      {error && <p className='text-red-500'>{error}</p> }
      {loading && <Loader />}
      <div className='flex flex-wrap justify-center gap-4'>{heroes && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
    </section>
  );
};

export default Heroes;
