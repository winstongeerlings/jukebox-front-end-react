import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeSelector} from '../theme-selector/theme-selector';
import {config} from '../../config/app-config';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../../components/styled/global.style';
import Header from '../../components/header';
import AlbumOverviewScreen from '../../features/album/screens/album-overview';
import AlbumDetailsScreen from '../../features/album/screens/album-details';

function AppLayout() {
    const theme = ThemeSelector(`${config.theme}`);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<AlbumOverviewScreen/>} />
                    <Route path="album/:albumName" element={<AlbumDetailsScreen/>} />
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    );
}

export default AppLayout;