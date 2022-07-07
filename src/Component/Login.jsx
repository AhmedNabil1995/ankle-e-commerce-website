import React from 'react'
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { getcount } from '../Redux/CountSlice';
export default function Login() {
let dispatch = useDispatch();
let users = useSelector(state=>state.user)
let navigate = useNavigate();

let Email = useRef();
let Pass = useRef();



const checkIfFound = ()=>{
 let res =users.some((el)=>{
    return el.email == Email.current.value && el.password == Pass.current.value;
 })
 if(res){
   localStorage.setItem('user',Email.current.value);
   navigate('/Home');
   dispatch(getcount())
 }else{
  console.log('someThing Wrong')
 }
}


  return (
    <div className='login'>
      <h1><span>M</span>odish <span>L</span>ogin <span>F</span>orm</h1>
      <div className='login-container'>
        <h3>Login Here<i class="fa-solid fa-hand-point-down"></i></h3>
        <div className='input'>
        <i class="fa-solid fa-envelope"></i>
        <input type='text' placeholder='Email' ref={Email}/>
        </div>
        <div className='input'>
        <i class="fa-solid fa-unlock"></i>
        <input type='password' placeholder='Password' ref={Pass}/>
        </div>
        <button onClick={checkIfFound}><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
      </div>
    </div>
  )
}
