import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/car.slice";
import {authReducer} from "./slices/auth.slice";


const rootReducer = combineReducers({
    carReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
