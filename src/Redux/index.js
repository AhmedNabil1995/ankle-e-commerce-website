import { configureStore } from '@reduxjs/toolkit'

import ProductsSlice from "./ProductsSlice";
import CartSlice from './CartSlice';
import CartChange from './CartChange';
import UserSlice from './UserSlice';
import CountSlice from './CountSlice';

const store =  configureStore({
    reducer : {
        products: ProductsSlice,
        cart:CartSlice,
        changeCart:CartChange,
        user:UserSlice,
        count:CountSlice
    },
})


export default store;