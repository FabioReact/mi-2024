import { FormEvent, useState } from 'react';
import { getHeroes } from '../../api/hero';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';

const Search = () => {
  const [name, setName] = useState('');
  const [heroes, setHeroes] = useState<Hero[]|null>(null);
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const data = await getHeroes({
      name,
    })
    setHeroes(data)
  }
  return (
    <section>
      <h1>Search your hero</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div className='flex flex-wrap justify-center gap-4'>{heroes && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
    </section>
  );
};

export default Search;
