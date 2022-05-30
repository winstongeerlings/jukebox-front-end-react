import React from 'react';
import {StyledSubTitle, StyledFlex} from '../../../components/styled';
import Favorite from '../../favorites/components/favorite';

function TrackGridItem(props: {name: string, duration: number, albumName: string}) {
    const {name, duration, albumName} = props;

    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);

    return (
        <StyledFlex justifyContent={'space-between'}>
            <div>
                <StyledSubTitle>{name}</StyledSubTitle>
                <StyledSubTitle>
                    <b>{duration ? `${minutes}:${String(seconds).padStart(2, '0')}` : `-`}</b>
                </StyledSubTitle>
            </div>
            <Favorite trackName={name} albumName={albumName}/>
        </StyledFlex>
    );
}

export default TrackGridItem;
