export interface AlbumInfo {
    name: string;
    listeners: string;
    artist: string;
    playcount: number;
    mbid: string;
    url: string;
    tracks: {
        track: {
            streamable: {
                fulltrack: string,
                "#text": string
            },
            duration: number,
            url: string,
            name: string,
            "@attr": {
                rank: number
            },
            artist: {
                url:string,
                name: string,
                mbid: string
            }
        }[];
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