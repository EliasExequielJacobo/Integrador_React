import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from `./categoriesSlice`



export const store = configureStore({
    reducer: categoriesReducer,
    
});

export default store;