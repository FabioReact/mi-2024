import { ReactNode, createContext, useContext, useState } from 'react';
import { Hero } from '../types/hero';

type FavContextType = {
  favorites: Hero[];
  addHeroToFav: (hero: Hero) => void;
  deleteHeroFromFav: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavContext = createContext<FavContextType>(null!);

export const useFavContext = () => useContext(FavContext);

export const FavContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Hero[]>([]);
  const isFavorite = (id: number) => {
    const index = favorites.findIndex((hero) => hero.id === id);
    return index !== -1;
  };
  const addHeroToFav = (hero: Hero) => {
    if (!isFavorite(hero.id))
      setFavorites((heroes) => {
        return [...heroes, hero];
      });
  };
  const deleteHeroFromFav = (id: number) => {
    if (isFavorite(id))
      setFavorites((heroes) => heroes.filter(hero => hero.id !== id));
  };
  return (
    <FavContext.Provider
      value={{
        favorites,
        addHeroToFav,
        isFavorite,
        deleteHeroFromFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
