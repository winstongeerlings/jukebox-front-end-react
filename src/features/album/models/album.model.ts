export interface Album {
    name: string;
    playcount: number;
    mbid: string;
    url: string;
    year: string;
    artist: {
        name: string,
        mbid: string;
        url: string;
    }
    image: {
       "#text": string,
       "size": "small" | "medium" | "large" | "extralarge",
    }[];
}