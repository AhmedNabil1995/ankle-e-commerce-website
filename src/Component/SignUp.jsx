import React from 'react'
import './SignUp.css';
import { useRef,useState } from 'react';
import {add} from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
export default function SignUp() {

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let Text = useRef();
  let Pass = useRef();
  let Email = useRef();

  const textVal = (value)=>{
      if(value){
      return /^[a-zA-Z]{4,}$/.test(value)
      }
      return false;
  }
  const passVal = (value)=>{
      if(value){
      return /^\w{4}$/.test(value)
      }
      return false
  }
  const emailVal = (value)=>{
      if(value){
      return /[a-zA-Z]*@gmail.com$/.test(value)
      }
      return false
  }

  let [inValidName,setInValidName] = useState(false);
  let [inValidPass,setInValidPass] = useState(false);
  let [inValidEmail,setInValidEmail] = useState(false); 
  
  let allValid =true;

  const validate = (name,pass,email)=>{
      if(!textVal(name))
      {
          setInValidName(true);
          allValid = false;
      }else{
          setInValidName(false);
      }

      if(!passVal(pass)){
          setInValidPass(true)
          allValid = false;
      }else{
          setInValidPass(false)
      }

      if(!emailVal(email)){
          setInValidEmail(true)
          allValid = false;
      }else{
          setInValidEmail(false)
      }

      return allValid;
  }
  const setData = ()=>{
      let name = Text.current.value;
      let password = Pass.current.value;
      let email = Email.current.value;

      if(validate(name,password,email))
      {
          dispatch(add({name,password,email}));
          navigate('/logIn')
      }
      allValid =true;
  }


  return (
    <div className='sign'>
      <h1><span>M</span>odish <span>S</span>ign <span>U</span>p <span>F</span>orm</h1>
      <div className='sign-container'>
        <h3>Sign UP Here<i class="fa-solid fa-hand-point-down"></i></h3>
        <div className='input'>
        <i class="fa-solid fa-user"></i>
        <input type='text' placeholder='User Name' ref={Text}/>
        {inValidName && <p>user Name is not valid</p>}
        </div>
        <div className='input'>
        <i class="fa-solid fa-envelope"></i>
        <input type='text' placeholder='Email' ref={Email}/>
        {inValidEmail && <p>Email is not valid</p>}
        </div>
        <div className='input'>
        <i class="fa-solid fa-unlock"></i>
        <input type='password' placeholder='Password' ref={Pass}/>
        {inValidPass && <p>Password is not valid</p>}
        </div>
        <button><i class="fa-solid fa-arrow-right-to-bracket" onClick={setData}></i></button>
      </div>
    </div>
  )
}
