import {configureStore} from "@reduxjs/toolkit";
import tasksSlice from './TodoListSlice';

let store = configureStore({
    reducer: {
         tasksSlice
    },
})

export default store;