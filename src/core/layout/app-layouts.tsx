import {ThemeSelector} from '../theme-selector/theme-selector';
import {config} from '../../config/app-config';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../../components/styled/global.style';
import Header from '../../components/header';
import AlbumOverviewScreen from '../../features/album/screens/album-overview';
import React from 'react';

function AppLayout() {
    const theme = ThemeSelector(`${config.theme}`);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header/>
            {/* TODO: implement router switch*/}
            <AlbumOverviewScreen/>
        </ThemeProvider>
    );
}

export default AppLayout;