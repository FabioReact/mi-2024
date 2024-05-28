import { Hero } from '../types/hero';

type HeroCardProps = {
  hero: Hero;
};

const HeroCard = ({ hero }: HeroCardProps) => (
  <div>
    {hero.id} - {hero.name}
  </div>
);

export { HeroCard };
