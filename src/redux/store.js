import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";
import {authReducer} from "./slices";


const rootReducer = combineReducers({
    carReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
