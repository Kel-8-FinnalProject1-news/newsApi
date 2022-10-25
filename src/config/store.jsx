import { configureStore } from "@reduxjs/toolkit";
import newsIndoensiaReducer from './reducer/NewsIndonesia/newsSlice';
import newsCovid19Reducer from "./reducer/NewsCovid19/NewsCovid19";
import NewsProgrammingReducer from "./reducer/NewsProgramming/NewsProgrammingSlice";
import postSaveReducer from './reducer/SaveContent/SaveContent';
import newsGlobalReducer from './reducer/SearchNewsSlice/SearchNewsSlice';

export const store = configureStore({
    reducer : {
        NewsIndonesiaSlice : newsIndoensiaReducer,
        newsProgramingSlice : NewsProgrammingReducer,
        newsCovid19 : newsCovid19Reducer,
        postSave : postSaveReducer,
        newsGlobal : newsGlobalReducer
    }
})