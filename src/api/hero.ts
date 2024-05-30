import { Hero } from '../types/hero';
import { Fetcher } from './fetcher';

const BASE_URL = 'http://localhost:4000';

export const getHeroesByLetter = async (letter: string) => {
  const response = await Fetcher.get<Hero[]>(`http://localhost:4000/heroes?name_like=^${letter}`);
  return response;
};

type GetHeroesParams = {
  name?: string;
  intelligence?: string;
  speed?: string;
  combat?: string;
  power?: string;
  durability?: string;
  strength?: string;
};

export const getHeroes = ({
  name,
  intelligence,
  speed,
  combat,
  power,
  durability,
  strength,
}: GetHeroesParams): Promise<Hero[]> => {
  let query = `name_like=${name}`;
  if (intelligence) query += `&powerstats.intelligence_gte=${intelligence}`;
  if (speed) query += `&powerstats.speed_gte=${speed}`;
  if (combat) query += `&powerstats.combat_gte=${combat}`;
  if (power) query += `&powerstats.power_gte=${power}`;
  if (durability) query += `&powerstats.durability_gte=${durability}`;
  if (strength) query += `&powerstats.strength_gte=${strength}`;
  return Fetcher.get(`${BASE_URL}/heroes?${query}`);
};
