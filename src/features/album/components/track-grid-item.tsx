import React from 'react';
import {StyledSubTitle, StyledFlex} from '../../../components/styled';

function TrackGridItem(props: {name: string, duration: number}) {
    const {name, duration} = props;

    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);

    return (
        <StyledFlex justifyContent={'space-between'}>
            <StyledSubTitle>{name}</StyledSubTitle>
            <StyledSubTitle>
                <b>{duration ? `${minutes}:${String(seconds).padStart(2, '0')}` : `-`}</b>
            </StyledSubTitle>
        </StyledFlex>
    );
}

export default TrackGridItem;
