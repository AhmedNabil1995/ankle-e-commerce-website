import React from 'react'
import './ContactUs.css'
export default function ContactUs() {
  return (
    <div className='contact'>
      <h1><span>C</span>ontact <span>U</span>s</h1>
      <div className='info-container'>
        <div className='info-box'>
        <i class="fa-solid fa-location-dot"></i>
            <h5>Address:</h5>
            <p>4030, Central Bazzar, opp.</p>
            <p>Varachha Police Station, Surat</p>
        </div>
        <div className='info-box'>
        <i class="fa-solid fa-phone"></i>
            <h5>Contact numbers:</h5>
            <p>123456789</p>
        </div>
        <div className='info-box'>
        <i class="fa-solid fa-envelope"></i>
            <h5>Email:</h5>
            <p>info@example.com</p>
        </div>
      </div>
      <div className='info-form'>
        <div className='container'>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='text' placeholder='Phone Number'/>
                <textarea placeholder='Message'></textarea>
            </form>

        </div>
      </div>
    </div>
  )
}
