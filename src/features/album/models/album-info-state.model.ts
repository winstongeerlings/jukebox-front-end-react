import {AlbumInfo} from './album-info.model';

export interface AlbumInfoState {
    albumInfoList: AlbumInfo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
}