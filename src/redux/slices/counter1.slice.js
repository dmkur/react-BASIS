import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {
    count1: 0,
    users: []
};

const getAllUsers = createAsyncThunk(
    'count1Slice/getAllUsers',
    async () => {
        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())

    }
);

const count1Slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc: (state, action) => {
            ++state.count1
        },
        dec: (state, action) => {
            --state.count1
        },
        reset: (state, action) => {
            state.count1 = 0
        }
    },
    extraReducers:{
        [getAllUsers.fulfilled]:(state, action) => {
            state.users = action.payload
        }
    }
});

const {reducer: count1Reducer, actions: {inc, dec, reset}} = count1Slice;

const count1Actions = {
    inc,
    dec,
    reset,
    getAllUsers
}

export {count1Reducer, count1Actions}