import { createSlice } from '@reduxjs/toolkit'
import axios from '../axios';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
    },
    reducers: {
        login: (state,action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = '';
            localStorage.removeItem('FBTOKEN')
            delete axios.defaults.headers.common['Authorization'];
        },
     
    }
});

export const {login,logout} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;