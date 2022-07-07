
import { createSlice } from "@reduxjs/toolkit";

const CartChange = createSlice({
name : 'change',
initialState : {val:0},
reducers :{
    change: (state)=>{
        state.val = Math.random();
    },
    
}
})

export const {change} = CartChange.actions; 
export default CartChange.reducer;