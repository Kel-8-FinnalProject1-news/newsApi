import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = []

export const fetchNewsCovid19 = createAsyncThunk('news/covid', async() => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}everything?q=covid-19&apiKey=${import.meta.env.VITE_API_KEY}`);
    return response.data
})

const newsCovid19Slice = createSlice({
    name : 'newsCovid',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchNewsCovid19.fulfilled, (state, action) =>{
            return action.payload
        })
    }
})

export const selectAllNewscovid = (state) => state.newsCovid

export default newsCovid19Slice.reducer