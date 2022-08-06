import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {}

const register = createAsyncThunk(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers:{}
})

const {reducer: authReducer, actions} = authSlice;

const authActions = {register}

export {authActions, authReducer}
