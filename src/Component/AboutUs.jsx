import React from 'react'
import './AboutUs.css'
import Team from './Team'
export default function AboutUs() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='img'>
          <img src='pic/about-us-01.jpg'/>
        </div>
        <div className='text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed mauris id lacus volutpat consectetur sed non velit. Nulla ultrices luctus libero vel feugiat. Vestibulum suscipit ligula et eros volutpat, quis gravida ex rutrum. Morbi non blandit orci, eu ultrices risus. Maecenas volutpat dui vitae sem hendrerit, quis finibus turpis porta. Pellentesque et efficitur eros, in dapibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div className='row g-5'>
          <div className='col-md-6'>
            <div className='img'>
              <img src='pic/about-us-02.jpg'/>
            </div>
            <h3>About our shop</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
          <div className='col-md-6'>
            <div className='img'>
              <img src='pic/about-us-03.jpg'/>
            </div>
            <h3>What we do</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
        </div>
        <div className='row g-4'>
          <Team img='pic/1.jpg'/>
          <Team img='pic/2.png'/>
          <Team img='pic/3.png'/>
          <Team img='pic/4.png'/>
        </div>
      </div>
    </div>
  )
}
