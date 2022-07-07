
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name : 'Cart',
initialState : {val:-400},
reducers :{
    show: (state)=>{
        state.val = 0;
    },
    hide: (state)=>{
        state.val = -400;
    },
}
})

export const {show,hide} = cartSlice.actions; 
export default cartSlice.reducer;