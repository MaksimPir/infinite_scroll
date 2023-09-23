import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postApi } from "shared/api/typicode";
const rootReducer= combineReducers({
    [postApi.reducerPath]:postApi.reducer
})

export const setupStore=()=>{
    return configureStore({
        reducer:rootReducer,
        middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware)
    })
}

