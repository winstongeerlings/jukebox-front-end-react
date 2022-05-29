import axios from 'axios';
import {config} from '../../../config/app-config';
import {Album, AlbumInfo} from '../models';

export const getAlbumsByArtistName = async (artistName: string): Promise<Album[]> => {
    const response = await axios.get(`${config.lastFM.url}/?method=artist.gettopalbums&artist=${artistName}&api_key=${config.lastFM.api_key}&format=json`);
    return response.data.topalbums.album;
};

export const getAlbumInfoByName = async (artistName: string, albumName: string): Promise<AlbumInfo> => {
    const response = await axios.get(`${config.lastFM.url}/?method=album.getinfo&artist=${artistName}&album=${albumName}&api_key=${config.lastFM.api_key}&format=json`);
    return response.data.album;
};