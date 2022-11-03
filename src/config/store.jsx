import { configureStore } from "@reduxjs/toolkit";

import {LoginSlice,  NewsGlobalSlice,  SaveContentSlice} from './reducer'

export const store = configureStore({
    reducer : {
        postSave : SaveContentSlice,
        newsGlobal : NewsGlobalSlice,
        LoginReducer : LoginSlice
    }
})