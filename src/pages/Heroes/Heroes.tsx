import { lazy, useEffect, useRef, useState } from 'react';
import arrayOfLetters from './utils';
import Loader from '../../components/Loader/Loader';
import { useGetHeroesByLetter } from '../../hooks/useGetHeroesByLetter';
import { useGetHeroesByLetterQuery, useLazyGetHeroesByLetterQuery } from '../../redux/services/heroes';

const HeroCard = lazy(() => import('../../components/HeroCard/HeroCard'))

const Heroes = () => {
  const mounterRef = useRef(false);
  const [selectedLetter, setSelectedLetter] = useState('a');
  // const { heroes, loading, error, load } = useGetHeroesByLetter();
  const [load, { data: heroes, isFetching: loading, error }] = useLazyGetHeroesByLetterQuery()

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
      {error && <p className='text-red-500'>An Error occured</p> }
      {loading && <Loader />}
      <div className='flex flex-wrap justify-center gap-4'>{heroes && !loading && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
    </section>
  );
};

export default Heroes;
