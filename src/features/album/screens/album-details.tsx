import React from 'react';
import {useParams} from 'react-router-dom';

function AlbumDetailsScreen() {
    let { albumName } = useParams();
    return (
        <div>
            TODO: implement details screen, reuse album info slice <br/>
            {albumName}
        </div>
    );
}

export default AlbumDetailsScreen;
