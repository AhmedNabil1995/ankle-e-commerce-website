
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
name : 'User',
initialState : JSON.parse(localStorage.getItem('users'))|| [],
reducers :{
    add:(state,action)=>{

       let found = state.some((el)=>{
               return el.email == action.payload.email;
        })

        if(!found){
        state = [...state,action.payload] 
        localStorage.setItem('users',JSON.stringify(state));
        }

    }
}
})

export const {add} = UserSlice.actions
export default UserSlice.reducer;