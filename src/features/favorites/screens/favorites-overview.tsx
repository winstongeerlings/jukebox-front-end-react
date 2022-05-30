import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectFavorites} from '../redux/favorites-slice';
import {Favorite} from '../models/favorite.model';
import {StyledFlex, StyledGrid, StyledTitle} from '../../../components/styled';
import FavoriteGridItem from '../components/favorite-grid-item';

function FavoritesOverviewScreen() {

    const favoritesList = useSelector(selectFavorites);

    const createFavoriteTrackList = () => {

        if(favoritesList.length === 0) {
            return 'No songs stored as favorites';
        }

        return favoritesList.map((favorite: Favorite) => {
            return <FavoriteGridItem key={favorite.trackName} trackName={favorite.trackName} albumName={favorite.albumName} />
        });
    }

    return (
        <>
           <StyledTitle>Track favorites:</StyledTitle>
            <StyledGrid columns={1}>
                {createFavoriteTrackList()}
            </StyledGrid>
            <StyledFlex justifyContent={'center'}>
                <Link to={'/'}>
                    Back to overview
                </Link>
            </StyledFlex>
        </>
    );
}

export default FavoritesOverviewScreen;
