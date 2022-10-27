import { configureStore } from "@reduxjs/toolkit";

import {LoginSlice, NewsCovid19Slice, NewsGlobalSlice, NewsIndonesiaSlice, NewsProgrammingSlice, SaveContentSlice} from './reducer'

export const store = configureStore({
    reducer : {
        NewsIndonesiaSlice :NewsIndonesiaSlice ,
        newsProgramingSlice :NewsProgrammingSlice ,
        newsCovid19 : NewsCovid19Slice,
        postSave : SaveContentSlice,
        newsGlobal : NewsGlobalSlice,
        LoginReducer : LoginSlice
    }
})