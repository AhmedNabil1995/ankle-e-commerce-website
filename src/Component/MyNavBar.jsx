import React from 'react'
import { useState } from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {  NavLink, useNavigate } from 'react-router-dom'
import './MyNavBar.css'
import { useSelector,useDispatch } from 'react-redux'
import { show } from '../Redux/CartSlice'
import { getcount } from '../Redux/CountSlice'
export default function MyNavBar() {

 
  let [display,setdisplay] = useState('none');
  let [display2,setdisplay2] = useState('none');

  let {count} = useSelector(state=>state.count);

  let dispatch = useDispatch();
  const changeDisplay =()=>{
      if(display=='none'){
        setdisplay('block')
      }else{
        setdisplay('none')
      }
  }

  const changeDisplay2 =()=>{
    if(display2=='none'){
      setdisplay2('block')
    }else{
      setdisplay2('none')
    }
}

  const checkUsers =()=>
  {
    let user = localStorage.getItem('user');
    if(user){
      changeDisplay2();
    }else{
      changeDisplay();
    }
  }

  const removeLogIn =()=>{
    changeDisplay2();
    localStorage.removeItem('user')
    dispatch(getcount())
  }

  const showCart = ()=>{
   let s = show();
   dispatch(s);

  }


  return (


    <Navbar className='navBar py-4' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='../pic/logo.webp' /></Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact Us</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <li className ="nav-item">
              <i className ="fa-solid fa-user" onClick={checkUsers}></i>
              <div className='person-pages'>
                <div className='rigester' style={{display:`${display}`}}>
                <NavLink className='person-link' onClick={changeDisplay} to={`/Login`}>Log In</NavLink>
                <NavLink className='person-link' onClick={changeDisplay} to={`/SignUp`}>Sign Up</NavLink>
                </div>
                <div className='profile' style={{display:`${display2}`}}>
                <NavLink className='person-link' onClick={changeDisplay2} to={`/User`}>Favourite</NavLink>
                <NavLink className='person-link' onClick={removeLogIn} to={`/logIn`}>Log Out</NavLink>
                </div>
              </div>
            </li>
            <li className ="nav-item" style={{position:'relative'}}>
              <i className ="fa-solid fa-cart-shopping" onClick={showCart}></i>
              <span style={{position:'absolute',color:'red',top:'-5px',right:0,fontSize:'20px'}}>{count}</span>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>










/* 

    <nav className ="navbar navbar-expand-lg bg-black navbar-dark py-4">
  <div className ="container">
      <a className ="navbar-brand" href="#"><img src='pic/logo.webp' /></a>
      <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
        <ul className ="navbar-nav">
          <li className ="nav-item">
            <a className ="nav-link" href="#">Home</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="#">Products</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="#">About</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="#">Contact Us</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="#">Blogs</a>
          </li>
        </ul>

        <ul className ="d-flex">
          <li className ="nav-item">
            <i className ="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className ="nav-item">
            <i className ="fa-solid fa-user"></i>
          </li>
          <li className ="nav-item">
            <i className ="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>

  </div>
</nav> */
  )
}
