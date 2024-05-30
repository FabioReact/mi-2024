import { FormEvent, useState } from 'react';
import { getHeroes } from '../../api/hero';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';
import Waiting from '../../hoc/Waiting';

const statLabels = ['intelligence', 'speed', 'combat', 'power', 'durability', 'strength'];

const statObject = statLabels.reduce<Record<string, string>>((acc, stat) => {
  acc[stat] = '1';
  return acc;
}, {});

const Search = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(statObject);
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await getHeroes({
      name,
      ...stats,
    });
    setLoading(false);
    setHeroes(data);
  };
  return (
    <section>
      <h1>Search your hero</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        {statLabels.map((statLabel) => (
          <fieldset key={statLabel}>
            <label htmlFor={statLabel}>{statLabel}</label>
            <input
              type='range'
              id={statLabel}
              name={statLabel}
              value={stats[statLabel]}
              onChange={(e) =>
                setStats((currentStats) => ({ ...currentStats, [statLabel]: e.target.value }))
              }
            />
          </fieldset>
        ))}

        <button>Search</button>
      </form>
      <Waiting loading={loading}>
        <div className='flex flex-wrap justify-center gap-4'>
          {heroes && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
        </div>
      </Waiting>
    </section>
  );
};

export default Search;
