import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {carServices} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
};

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carServices.getAllCars();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}) => {
        const {data} = await carServices.updateById(id, car)
        return data
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (car, ) => {
         const {data} = await carServices.createCar(car)
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async (id) => {
        await carServices.deleteById(id)
        return id
    }
)

const carSlice = createSlice({
    name: 'carSlice',

    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
            //console.log(current(state.cars), 'Current')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(getAllCars.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id = action.payload.id)
                Object.assign(currentCar, action.payload)
                state.carForUpdate = null
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                state.cars.
            })
    }
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {getAllCars, setCarForUpdate, updateById}

export {
    carReducer,
    carActions
}