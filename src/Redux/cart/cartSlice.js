import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cartUtils';


const INITIAL_STATE = {

    hidden: true,
    cartItems: []

}


const cartSlice = createSlice ({

    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {

        mostrarCarrito: (state) =>{
            return {
                ...state,
                hidden: !state.hidden,
            }
        },
        
        borrarCarrito: (state) =>{
            return {
                ...state,
                cartItems: [],
            }
        },

        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),


            };

        },

        removeItem : (state, action) => {

            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),

            };

        },

        clearCart: (state) => {

            return {
                ...state,
                cartItems: []
            };

        },

        



    },


});

export const { mostrarCarrito,borrarCarrito,addToCart,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer;