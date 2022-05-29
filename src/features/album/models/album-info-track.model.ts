export interface AlbumInfoTrack {
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
}