import {Album} from './album.model';

export interface AlbumState {
    albumList: Album[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
}