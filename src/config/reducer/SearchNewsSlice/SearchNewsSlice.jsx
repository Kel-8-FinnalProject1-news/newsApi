import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchNewsGlobal = createAsyncThunk('news/Global', async (search)=>{
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`);
    return response.data
})

const newsGlobalSlice = createSlice({
    name: 'newsGlobal',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchNewsGlobal.fulfilled, (state, action)=>{
            return action.payload;
        })
    }
})

export const getAllNewsGlobal = (state) => state.newsGlobal;

export default newsGlobalSlice.reducer