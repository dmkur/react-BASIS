import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    count1: 0
};

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
    }
});

const {reducer: count1Reducer, actions: {inc, dec, reset}} = count1Slice;

const count1Actions = {
    inc,
    dec,
    reset
}

export {count1Reducer, count1Actions}