import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyledGrid, StyledTitle, StyledContainer, StyledFlex, StyledSortingButton} from '../../../components/styled';
import Loading from '../../../components/loading';
import {
    selectAllAlbums,
    getAlbumsStatus,
    sortByName,
    getAlbumsSortBy,
    fetchAlbums,
    getAlbumsOrderBy,
} from '../redux/album-slice';
import {Album} from '../models';
import AlbumGridItem from '../components/album-grid-item';
import {StyledArtistCover} from '../components/styled';

function AlbumOverviewScreen() {
    const artistImageUrl = 'https://lastfm.freetls.fastly.net/i/u/ar0/37a1ce52973f682800d2a9c291de3e55.jpg';
    const albumList = useSelector(selectAllAlbums);
    const stateStatus = useSelector(getAlbumsStatus);
    const stateSortBy = useSelector(getAlbumsSortBy);
    const stateOrderBy = useSelector(getAlbumsOrderBy);

    const dispatch = useDispatch();

    useEffect(() => {
        if (stateStatus === 'idle') {
            //* When there is time figure how to solve typing issue *//
            // @ts-ignore
            dispatch(fetchAlbums());
        }
    }, [stateStatus, dispatch]);

    const renderedAlbums = albumList.map((album: Album) => {
        const image = album.image.find(image => image.size === 'extralarge');
        const imageUrl = image ? image['#text'] : null;
        return <AlbumGridItem key={album.name} name={album.name} artist={album.artist.name} imageUrl={imageUrl} />
    });

    return (
        <>
            <StyledArtistCover width={"100%"} img={artistImageUrl}>
                <h1>Zedd</h1>
            </StyledArtistCover>
            <StyledContainer>
                <StyledFlex justifyContent={"space-between"} alignItems={"center"}>
                    <StyledTitle>Albums:</StyledTitle>
                    <div>
                        <StyledSortingButton isActive={stateOrderBy === 'name'} sortBy={stateSortBy} onClick={() => {dispatch(sortByName())}}>Album name <img width={12} src={'/icons/sort_arrow.svg'}/></StyledSortingButton>
                    </div>
                </StyledFlex>
                {stateStatus === 'loading' ?
                    <Loading />
                    : (
                        <StyledGrid columns={3}>
                            {renderedAlbums}
                        </StyledGrid>
                    )}
            </StyledContainer>
        </>
    );
}

export default AlbumOverviewScreen;
