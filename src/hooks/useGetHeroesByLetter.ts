import { useState } from 'react';
import { Hero } from '../types/hero';
import { getHeroesByLetter } from '../api/hero';

const useGetHeroesByLetter = () => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async (letter: string) => {
    setLoading(true);
    setHeroes(null);
    try {
      const data = await getHeroesByLetter(letter);
      setHeroes(data);
    } catch {
      setError('Problem during fetching data');
    } finally {
      setLoading(false);
    }
  };

  return {
    heroes,
    loading,
    error,
    load,
  }
};

export { useGetHeroesByLetter };
