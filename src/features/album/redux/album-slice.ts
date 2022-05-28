import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {config} from '../../../config/app-config';
import {AlbumState} from '../models';
import {getAlbumsByArtistName} from '../services/album.service';

const initialState: AlbumState = {
  albumList: [],
  status: 'idle',
  error: undefined
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    sortByName: (state: AlbumState) => {
      // TODO: implement sorting by album name
      state.albumList = [];
    },
    sortByAlbumYear: (state: AlbumState) => {
      // TODO: implement sorting by album year
      state.albumList = [];
    }
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
export const getAlbumsError = (state: {album: AlbumState}) => state.album.error;

export const {sortByName, sortByAlbumYear} = albumSlice.actions;
export default albumSlice.reducer;