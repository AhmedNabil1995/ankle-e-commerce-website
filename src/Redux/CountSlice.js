import { createSlice } from "@reduxjs/toolkit";
import { getFromCart } from "../Component/Helper";


const CountSlice = createSlice({

    name:'Count',
    initialState:{count:getFromCart().length},

    reducers:{
        getcount:(state)=>{
            state.count = getFromCart().length;
        }
    }

})

export const {getcount} = CountSlice.actions
export default CountSlice.reducer