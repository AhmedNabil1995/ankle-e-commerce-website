import React from 'react'
import { Carousel } from 'react-bootstrap';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';


export default function Slider() {
  return (
    <div className='slider'>
        <div className='container'>
            <Carousel className='slider-con' variant="dark">
                <Carousel.Item>
                    <div>
                    <i class="fa-solid fa-circle-info"></i>
                        <p>Duis faucibus enim vitae nunc molestie, arcu facilisis arcu Nullam mattis
faucibus enim vitae nunc molestie, need arcu Nullam bibendum,
vitae nunc molestie, nec nec arcu Nullam bibendum aac</p>
                        <img src={p1}/>
                        <p><span>John Doe</span>CEO & Founder</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                    <i class="fa-solid fa-circle-info"></i>
                        <p>Duis faucibus enim vitae nunc molestie, arcu facilisis arcu Nullam mattis
faucibus enim vitae nunc molestie, need arcu Nullam bibendum,
vitae nunc molestie, nec nec arcu Nullam bibendum aac</p>
                        <img src={p2}/>
                        <p><span>John Doe</span>CEO & Founder</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                    <i class="fa-solid fa-circle-info"></i>
                        <p>Duis faucibus enim vitae nunc molestie, arcu facilisis arcu Nullam mattis
faucibus enim vitae nunc molestie, need arcu Nullam bibendum,
vitae nunc molestie, nec nec arcu Nullam bibendum aac</p>
                        <img src={p3}/>
                        <p><span>John Doe</span>CEO & Founder</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
</div>
  )
}
