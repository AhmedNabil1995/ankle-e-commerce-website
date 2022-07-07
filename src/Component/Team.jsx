import React from 'react'
import './Team.css'
export default function Team(props) {
  return (
    <div className=' col-sm-6 col-lg-3'>
        <div className='team-card'>
        <div className='image'>
            <img src={props.img}/>
        </div>
        <h4>Name</h4>
        <p>Job Title</p>
        <div className='info'>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
        </div>
    </div>
  )
}
