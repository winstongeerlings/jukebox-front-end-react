import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {StyledArtistCover} from '../components/styled';
import {useSelector} from 'react-redux';
import {selectAllAlbumInfos} from '../redux/album-info-slice';
import {AlbumInfo, AlbumInfoTrack} from '../models';
import {
    StyledContainer, StyledFlex,
    StyledGrid,
    StyledTitle,
} from '../../../components/styled';
import TrackGridItem from '../components/track-grid-item';

function AlbumDetailsScreen() {
    const { albumName } = useParams();
    const albumInfoList = useSelector(selectAllAlbumInfos);
    const requestedAlbumInfo = albumInfoList.find(albumInfo => albumInfo.name === albumName);

    if(!requestedAlbumInfo) {
        return (
            <>
                <p>Oh Oh! we could not find the requested album: <b>{albumName}</b></p>
            </>
        );
    }

    const extractImageUrl = (albumInfo: AlbumInfo) => {
        const image = albumInfo.image.find(image => image.size === 'extralarge');
        return image ? image['#text'] : null;
    }

    const createTrackList = () => {

        if(!requestedAlbumInfo.tracks || !requestedAlbumInfo.tracks.track) {
           return 'No songs found in this album';
        }
        const track = requestedAlbumInfo.tracks.track;

        if(Array.isArray(track)) {
            return track.map((track: AlbumInfoTrack) => {
                return <TrackGridItem key={track.name} name={track.name} duration={track.duration} />
            });
        }

        return <TrackGridItem name={track.name} duration={track.duration} />
    }

    return (
        <>
            <StyledArtistCover width={"100%"} img={extractImageUrl(requestedAlbumInfo)}>
                <h2>{albumName}</h2>
            </StyledArtistCover>
            <StyledContainer>
                <StyledTitle>Songs:</StyledTitle>
                <StyledGrid columns={1}>
                    {createTrackList()}
                </StyledGrid>
                <StyledFlex justifyContent={'center'}>
                    <Link to={'/'}>
                        Back to overview
                    </Link>
                </StyledFlex>
            </StyledContainer>
        </>
    );
}

export default AlbumDetailsScreen;
