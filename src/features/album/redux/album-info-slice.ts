import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAlbumInfoByName} from '../services/album.service';
import {AlbumInfoState} from '../models/album-info-state.model';
import {AlbumInfo} from '../models/album-info.model';

const initialState: AlbumInfoState = {
  albumInfoList: [],
  status: 'idle',
  error: undefined
};

const addAlbumInfoToList = (albumInfoList: AlbumInfo[], newAlbumInfo: AlbumInfo) => {
  const _albumInfo = albumInfoList.find((albumInfo) => albumInfo.name === newAlbumInfo.name);

  if(!_albumInfo){
    albumInfoList = albumInfoList.concat(newAlbumInfo);
  }

  return albumInfoList;
};

export const albumInfoSlice = createSlice({
  name: 'albumInfo',
  initialState,
  reducers: {
    sortByName: (state: AlbumInfoState) => {
      // TODO: Action to sort albumlist by name
      state.albumInfoList = [];
    },
    sortByAlbumYear: (state: AlbumInfoState) => {
      // TODO: Action to sort albumlist by name
      state.albumInfoList = [];
    }
  },
  extraReducers(builder) {
    builder
        .addCase(fetchAlbumInfo.pending, (state: AlbumInfoState, action) => {
          state.status = 'loading'
        })
        .addCase(fetchAlbumInfo.fulfilled, (state: AlbumInfoState, action) => {
          state.status = 'succeeded'
          state.albumInfoList = addAlbumInfoToList(state.albumInfoList, action.payload);
        })
        .addCase(fetchAlbumInfo.rejected, (state: AlbumInfoState, action: any) => {
          state.status = 'failed'
          state.error = action.error.message
        })
  },
});

export const fetchAlbumInfo = createAsyncThunk('albums/fetchAlbumInfo', async ({ artistName, albumName }: {artistName: string, albumName: string }) => {
  return await getAlbumInfoByName(artistName, albumName);
})

export const selectAllAlbumInfos = (state: {albumInfo: AlbumInfoState}) => state.albumInfo.albumInfoList;
export const getAlbumInfosStatus = (state: {albumInfo: AlbumInfoState}) => state.albumInfo.status;
export const getAlbumInfosError = (state: {albumInfo: AlbumInfoState}) => state.albumInfo.error;

export const {sortByName, sortByAlbumYear} = albumInfoSlice.actions;
export default albumInfoSlice.reducer;