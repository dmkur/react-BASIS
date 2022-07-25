import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices";

const rootReducer = combineReducers({
    count1Reducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}