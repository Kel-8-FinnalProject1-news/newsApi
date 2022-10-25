import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = [] 

export const fetchNewsPrograming = createAsyncThunk('news/fetchProramming', async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}everything?q=programing&apiKey=${import.meta.env.VITE_API_KEY}`);
    return response.data
})

const newsProramming = createSlice({
    name: 'newsPrograming',
    initialState,
    reducers: {
        filterNewsPrograming : (state, action) => {
            state.filter((item)=>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            )
        }
    },
    extraReducers(builder){
        builder.addCase(fetchNewsPrograming.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export const selectAllNewsPrograming =(state)=> state.newsProramming;
export const {filterNewsPrograming} = newsProramming.actions
export default newsProramming.reducer