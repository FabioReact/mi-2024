import { Hero } from '../types/hero';
import { Fetcher } from './fetcher';

export const getHeroesByLetter = async (letter: string) => {
  const response = await Fetcher.get<Hero[]>(`http://localhost:4000/heroes?name_like=^${letter}`);
  return response;
};

export const getHeroes = async () => {
  const response = await fetch('http://localhost:4000/heroes');
  return response.json();
};
