import React, {useState} from 'react';
import {StyledFavorite} from './styled/favorite.styled';
import {useDispatch, useSelector} from 'react-redux';
import {selectFavorites, addTrackFromFavorites, removeTrackFromFavorites} from '../redux/favorites-slice';

function Favorite(props: {trackName: string, albumName: string}) {
    const {trackName, albumName} = props;

    const favoritesList = useSelector(selectFavorites);
    const dispatch = useDispatch();

    const favorite = favoritesList.find(favorite => favorite.trackName === trackName)
    const [isFavorite, setFavorite] = useState(favorite != null);

    const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const _isFavorite = !isFavorite;
        setFavorite(_isFavorite);

        if(_isFavorite) {
            //* When there is time figure how to solve typing issue *//
            // @ts-ignore
            dispatch(addTrackFromFavorites({trackName, albumName}))
        } else {
            //* When there is time figure how to solve typing issue *//
            // @ts-ignore
            dispatch(removeTrackFromFavorites({trackName, albumName}))
        }
    }


    return (
        <StyledFavorite onClick={toggleFavorite}>
            <img alt="Favorite button" width={'100%'} src={`/icons/${isFavorite ? 'favorite_filled' : 'favorite_outlined'}.svg`} />
        </StyledFavorite>
    );
}

export default Favorite;
