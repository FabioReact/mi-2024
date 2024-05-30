import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import { getHeroes } from '../../api/hero';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard';

type SelectPlayerProps = {
  label: string;
  onSelectHero: Dispatch<SetStateAction<Hero | null>>;
};

export const SelectPlayer = ({ label, onSelectHero }: SelectPlayerProps) => {
  const [selected, setSelected] = useState<Hero | null>(null);

  const heroRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (heroRef.current?.value) {
      const data = await getHeroes({ name: heroRef.current.value });
      setHeroes(data);
    }
  };

  const onSelectHandler = (hero: Hero) => {
    onSelectHero(hero);
    setSelected(hero);
  };

  return (
    <div>
      {!selected && (
        <form onSubmit={onSubmitHandler}>
          <fieldset>
            <label className='capitalize' htmlFor={label}>
              Select {label} Hero
            </label>
            <input ref={heroRef} type='text' id={label} name={label} />
            <button>Select</button>
          </fieldset>
        </form>
      )}
      {heroes && !selected && (
        <ul>
          {heroes.map((hero) => (
            <li
              key={hero.id}
              className='cursor-pointer border border-b border-black rounded px-2 py-1'
              onClick={() => onSelectHandler(hero)}
            >
              <span className='text-gray-700'>#{hero.id}</span> -{hero.name}
            </li>
          ))}
        </ul>
      )}
      {selected && <HeroCard hero={selected} />}
    </div>
  );
};
