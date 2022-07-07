
import { createSlice } from "@reduxjs/toolkit";
import products from './Products'
const productsSlice = createSlice({
name : 'Products',
initialState : {val:products},
reducers :{
    getByName:(state,action)=>{
        state.val =  products.filter((el)=>{
            return (el.name).toLowerCase().startsWith(action.payload); 
        })
    },
    getByColor:(state,action)=>{
        state.val = products.filter((el)=>{
            if(action.payload=='All') return state.val
            return el.color.includes(action.payload);
        })
    },
    getBySize:(state,action)=>{
        state.val = products.filter((el)=>{
            if(action.payload=='All') return state.val
            return el.size.includes(action.payload);
        })
    },
}
})

export const {getByName,getByColor,getBySize} = productsSlice.actions;
export default productsSlice.reducer;