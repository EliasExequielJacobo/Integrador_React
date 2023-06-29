import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../Data/DataProducts";
import { Products } from "../Data/DataProducts";

const INITIAL_STATE = {

    products: Products,


}

export const productsSlice = createSlice({
    name:"products",
    initialState: INITIAL_STATE,
    reducers: {

        getProducts: state => {

            return state;

        },

    },


});


export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;