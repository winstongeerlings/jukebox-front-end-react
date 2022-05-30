import {createSlice} from '@reduxjs/toolkit';
import {FavoritesState} from '../models/favorites-state.model';
import {FavoritesAction} from '../models/favorites-action.model';

const initialState: FavoritesState = {
  list: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addTrackFromFavorites: (state: FavoritesState, action: FavoritesAction) => {
      state.list.push(action.payload);
    },
    removeTrackFromFavorites: (state: FavoritesState, action: FavoritesAction) => {
      state.list = state.list.filter(favorite => favorite.trackName !== action.payload.trackName);
    },
  },
});

export const selectFavorites = (state: {favorites: FavoritesState}) => state.favorites.list;

export const {addTrackFromFavorites, removeTrackFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;