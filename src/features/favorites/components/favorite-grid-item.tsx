import React from 'react';
import {Link} from 'react-router-dom';
import {StyledFlex, StyledSubTitle} from '../../../components/styled';
import Favorite from './favorite';

function FavoriteGridItem(props: {trackName: string, albumName: string}) {
    const {trackName, albumName} = props;

    return (
        <Link to={`/album/${albumName}`}>
            <StyledFlex justifyContent={'space-between'}>
                <div>
                    <StyledSubTitle>{trackName}</StyledSubTitle>
                    <StyledSubTitle>
                        <b>{albumName}</b>
                    </StyledSubTitle>
                </div>
                <Favorite trackName={trackName} albumName={albumName} />
            </StyledFlex>
        </Link>
    );
}

export default FavoriteGridItem;
