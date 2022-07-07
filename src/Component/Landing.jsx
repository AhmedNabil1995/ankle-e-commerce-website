import React, { useState } from 'react'
import './Landing.css'
export default function Landing() {

    let [bgLanding,setbgLanding] = useState('1')
    let [position,setposition] = useState('start-0')
    let [animate,setanimate] = useState('animate__backInUp')
    let [animate2,setanimate2] = useState('animate__fadeIn')
   const replaceBG = ()=>{
    if(bgLanding=='1'){
        setposition('end-0')
        setbgLanding('2')
        setanimate('animate__backInDown');
        setanimate2('animate__zoomIn')
    }else{
        setposition('start-0')
        setbgLanding('1')
        setanimate('animate__backInUp');
        setanimate2('animate__fadeIn')
    }
   }
  return (
    <section className='landing'>
        <img className={`animate__animated ${animate2}`} src={`pic/landing${bgLanding}.jpg`}/>
            <div className={`landing_text ${position} animate__animated ${animate}`}>
                <h1>Ankle</h1>
                <p>Explore our best of collection on this season!</p>
                <button className='hvr-sweep-to-right'>Shop Now</button>
            </div>
        <div className='landing_btn'>
            <button onClick={replaceBG}><i className='fas fa-angle-left'></i></button>
            <button onClick={replaceBG}><i className='fas fa-angle-right'></i></button>
        </div>
    </section>
  )
}
