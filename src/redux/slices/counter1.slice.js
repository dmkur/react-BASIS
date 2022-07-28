import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {
    count1: 0,
    users: [],
    isLoading: false,
    serverError: null
};

const getAllUsers = createAsyncThunk(
    'count1Slice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad Request')
                    }
                    return response.json()
                })
        } catch (e) {
            return rejectWithValue(e.message)
        }

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
    //method 1
    // extraReducers: {
    //     [getAllUsers.fulfilled]: (state, action) => {
    //         state.isLoading = false
    //         state.users = action.payload
    //     },
    //     [getAllUsers.pending]: (state) => {
    //         state.isLoading = true
    //
    //     },
    //     [getAllUsers.rejected]: (state, action) => {
    //         state.serverError = action.payload
    //     }
    // }
    //method 2
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.users = action.payload
            })
            .addCase(getAllUsers.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.serverError = action.payload
            })
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