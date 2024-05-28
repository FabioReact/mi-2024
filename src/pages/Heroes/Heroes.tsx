import { useEffect, useState } from 'react';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';
import { getHeroesByLetter } from '../../api/hero';
import arrayOfLetters from './utils';
import Loader from '../../components/Loader/Loader';

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('a');
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Création uniquement - []');
    return () => {
      console.log('Déstruction - []');
    };
  }, []);

  useEffect(() => {
    console.log(
      'Création ET mise à jour de la lettre séléctionnée - [selectedLetter: ${selectedLetter}]',
    );
    const load = async () => {
      setLoading(true);
      setHeroes(null);
      try {
        const data = await getHeroesByLetter(selectedLetter);
        setHeroes(data);
      } catch {
        setError('Problem during fetching data')
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => {
      // AbortSignal of fetch request
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
      {error && <p className='text-red-500'>{error}</p> }
      {loading && <Loader />}
      <div className='flex flex-wrap justify-center gap-4'>{heroes && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
    </section>
  );
};

export default Heroes;
