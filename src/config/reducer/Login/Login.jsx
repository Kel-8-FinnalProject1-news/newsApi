import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = []

export const fetchDataUsers = createAsyncThunk('getData/users', async (data) =>{
    const response = await axios.get(`${import.meta.env.VITE_API_KEY_USERS}`);
    const UserData = response.data;

    const checkElement = UserData.find(item => item.nama === data.username && item.alamat === data.password)
    if(checkElement){
        localStorage.setItem('token', checkElement.nohp)
        location.reload()
        return checkElement
    } else{
        return console.log('login gagal');
    }
})

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers : {
        logout: () =>{
            localStorage.removeItem('token')
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchDataUsers.fulfilled , (state, action)=>{
           return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.login;
export const {logout} = LoginSlice.actions;
export default LoginSlice.reducer