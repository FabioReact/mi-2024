import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Hero } from '../../types/hero';

// Define a type for the slice state
type FavoritesState = {
  favorites: Hero[];
};

// Define the initial state using that type
const initialState: FavoritesState = {
  favorites: [],
};

export const counterSlice = createSlice({
  name: 'heroes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addHeroToFavorites: (state, action: PayloadAction<Hero>) => {
        state.favorites.push(action.payload)
    },
    deleteHeroFromFavorites: (state, action: PayloadAction<number>) => {
        state.favorites.filter(hero => hero.id !== action.payload)
    },
  },
});

export const { addHeroToFavorites, deleteHeroFromFavorites } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getFavorites = (state: RootState) => state.heroes.favorites;
// export const isFavorite = (state: RootState, id: number) => state.heroes.favorites.find(hero => hero.id === id)

export default counterSlice.reducer;
