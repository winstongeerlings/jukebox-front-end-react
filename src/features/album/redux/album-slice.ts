import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {config} from '../../../config/app-config';
import {AlbumState} from '../models';
import {getAlbumsByArtistName} from '../services/album.service';

const initialState: AlbumState = {
  albumList: [],
  status: 'idle',
  error: undefined,
  orberDy: 'API',
  sortBy: 'ASC',
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    sortByName: (state: AlbumState) => {
      const _orberBy = 'name';
      const _resetSort = state.orberDy !== _orberBy;
      if(_resetSort) {
        state.sortBy = 'ASC';
      } else {
        state.sortBy = state.sortBy === 'ASC' ? 'DESC' : 'ASC';
      }

      state.albumList = state.albumList.sort((a, b) => {
        if(!_resetSort) {
          if(state.sortBy === 'ASC') {
            return a.name > b.name ? 1 : -1;
          } else {
            return a.name > b.name ? -1 : 1;
          }
        } else {
          return a.name > b.name ? 1 : -1;
        }
      });
      state.orberDy = _orberBy;
    },
  },
  extraReducers(builder) {
    builder
        .addCase(fetchAlbums.pending, (state: AlbumState, action) => {
          state.status = 'loading'
        })
        .addCase(fetchAlbums.fulfilled, (state: AlbumState, action) => {
          state.status = 'succeeded'
          state.albumList = action.payload
        })
        .addCase(fetchAlbums.rejected, (state: AlbumState, action: any) => {
          state.status = 'failed'
          state.error = action.error.message
        })
  },
});

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  return await getAlbumsByArtistName(config.artist);
})

export const selectAllAlbums = (state: {album: AlbumState}) => state.album.albumList;
export const getAlbumsStatus = (state: {album: AlbumState}) => state.album.status;
export const getAlbumsSortBy = (state: {album: AlbumState}) => state.album.sortBy;
export const getAlbumsOrderBy = (state: {album: AlbumState}) => state.album.orberDy;
export const getAlbumsError = (state: {album: AlbumState}) => state.album.error;

export const {sortByName} = albumSlice.actions;
export default albumSlice.reducer;