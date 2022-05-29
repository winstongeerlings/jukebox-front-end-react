import {Album} from './album.model';

export interface AlbumState {
    albumList: Album[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    orberDy: string;
    sortBy: 'ASC' | 'DESC';
    error?: string;
}