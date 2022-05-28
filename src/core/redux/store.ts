import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import albumReducer from "../../features/album/redux/album-slice";
import albumInfoReducer from "../../features/album/redux/album-info-slice";

export const store = configureStore({
    reducer: {
        album: albumReducer,
        albumInfo: albumInfoReducer
    },
    middleware: [thunkMiddleware],
});