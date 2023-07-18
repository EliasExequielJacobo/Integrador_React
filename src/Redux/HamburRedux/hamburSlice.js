import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {

    hiddenHambur: true,
    
};

const HamburMenuSlice = createSlice ({

    name: "MenuHambur",
    initialState: INITIAL_STATE,
    reducers: {
        toggleHambur: (state) =>{
            return {
                ...state,
                hiddenHambur: !state.hiddenHambur,
            };
        },
    },

});

export const { toggleHambur } = HamburMenuSlice.actions;

export default HamburMenuSlice.reducer;

