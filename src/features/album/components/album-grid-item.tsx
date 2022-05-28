import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyledTitle, StyledSubTitle} from '../../../components/styled';
import {StyledAlbumCover} from './styled';
import {fetchAlbumInfo, getAlbumInfosStatus, selectAllAlbumInfos} from '../redux/album-info-slice';

function AlbumGridItem(props: {name: string, artist: string, imageUrl: string | null}) {
    const {name, artist, imageUrl} = props;

    const [isInit, setIsInit] = useState(true);

    const albumInfoList = useSelector(selectAllAlbumInfos);
    const stateStatus = useSelector(getAlbumInfosStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInit) {
            //* When there is time figure how to solve typing issue *//
            // @ts-ignore
            dispatch(fetchAlbumInfo({albumName: name, artistName: artist}));
            setIsInit(false);
        }
    }, [stateStatus, dispatch]);


    const extractYearFromAlbumInfoList = (albumName: string) => {
        const albumInfo = albumInfoList.find(albumInfo => albumInfo.name === albumName);

        if (!albumInfo) {
            return 'Unknown';
        }

        return albumInfo && albumInfo.wiki && albumInfo.wiki.published ? new Date(albumInfo.wiki.published).getFullYear().toString() : 'Unknown';
    }

    return (
        <section>
            <StyledAlbumCover img={imageUrl} width={"100%"}/>
            <StyledTitle>{name}</StyledTitle>
            <StyledSubTitle>{extractYearFromAlbumInfoList(name)}</StyledSubTitle>
        </section>
    );
}

export default AlbumGridItem;
