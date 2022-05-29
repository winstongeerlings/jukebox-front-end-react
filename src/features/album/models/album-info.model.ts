import {AlbumInfoTrack} from './album-info-track.model';

export interface AlbumInfo {
    name: string;
    listeners: string;
    artist: string;
    playcount: number;
    mbid: string;
    url: string;
    tracks: {
        track: AlbumInfoTrack | AlbumInfoTrack[] ;
    };
    image: {
       "#text": string,
       "size": "small" | "medium" | "large" | "extralarge",
    }[];
    wiki: {
        published: string;
        summary: string;
        content: string;
    }
}