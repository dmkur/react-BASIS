import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    errors:null,
    isAuth: null
}

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

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.login(user);
            return data
            //console.log(data, 'data info')
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true

                authService.setTokens(action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1)
                if(type === 'rejected'){
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
    }
})

const {reducer: authReducer, actions} = authSlice;

const authActions = {register,login}

export {authActions, authReducer}
