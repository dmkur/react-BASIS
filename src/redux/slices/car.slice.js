import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services";

const initialState = {
    cars: [],
    error: null
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
const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carServices.createCar(car)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCarByID = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carServices.deleteCarById(id)
            return id
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
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled,(state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(deleteCarByID.fulfilled, (state, action) => {
                const currentCar = state.cars.findIndex(car => car.id === action.payload.id)
                state.cars.splice(currentCar, 1)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').slice(-1)
                // console.log(action.type.split('/').slice(-1))
                if(type === 'rejected'){
                    state.error = action.payload
                } else {
                    state.error = null
                }
            })
    }
});

const {reducer: carReducer, actions} = carSlice;

const carSliceActions = {getAllCars, createCar, deleteCarByID}

export {carSliceActions, carReducer}


