import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cars: []
};



const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
});

const {reducer: carReducer, actions} = carSlice;

const carSliceActions = {

}

export {carSliceActions, carReducer}


