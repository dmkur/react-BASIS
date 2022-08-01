import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services";

const initialState = {
    cars: []
};

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carServices.getAllCars()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled,(state, action) => {
                state.cars = action.payload
            })
    }
});

const {reducer: carReducer, actions} = carSlice;

const carSliceActions = {getAllCars}

export {carSliceActions, carReducer}


