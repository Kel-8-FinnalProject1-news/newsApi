import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const fetchNewsIndonesia = createAsyncThunk('news/fetchNews', async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}everything?q=indonesia&apiKey=${import.meta.env.VITE_API_KEY}`);
    return response.data
})

const newsIndoensiaSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchNewsIndonesia.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllnews = (state) => state.news;

export default newsIndoensiaSlice.reducer