import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-5">
      <div className='container'>
        <div className='row'>

          <div className='col-md-6 col-lg-3 mb-3'>
            <h5 className='mb-4'>Store Information</h5>
            <div className='text-muted footer-info-icon'>
              <p className='d-flex'><i className="fa-solid fa-location-dot"></i><span>My Company, 42 Puffin Street 12345 Puffinville France</span></p>
              <p><i className="fa-solid fa-phone"></i>0123-456-789</p>
              <p><i className='fas fa-caret-square-up'></i>0123-456-789</p>
              <p><i className='	fas fa-envelope-square'></i>shop@gmail.com</p>
            </div>
          </div>

          <div className='col-md-6 col-lg-2 mb-3'>
            <h5 className='mb-4'>My Account</h5>
            <div className='text-muted'>
              <p><a>Search</a></p>
              <p><a>Wishlist</a></p>
              <p><a>About Us</a></p>
              <p><a>Contact Us</a></p>
              <p><a>Delivery</a></p>
            </div>
          </div>

          <div className='col-md-6 col-lg-2 mb-3'>
            <h5 className='mb-4'>Our Company</h5>
            <div className='text-muted'>
              <p><a>Faq's</a></p>
              <p><a>Legal Notice</a></p>
              <p><a>Delivery</a></p>
              <p><a>About Us</a></p>
              <p><a>Shipping</a></p>
            </div>
          </div>

          <div className='col-md-6 col-lg-5'>
            <h5 className='mb-4'>Subscribe To Our Newsletter</h5>
            <form className='footer-form'>
              <input type='text' placeholder='email@example.com'/>
              <button>Subscribe</button>
            </form>
            <hr />
            <div className='footer-icon text-center text-sm-start'>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

        </div>

        <hr />
        <div className='py-4 text-center text-sm-start'>
          <div className='d-md-flex align-item-center justify-content-between'>
          <p>Copyright © 2022 themes-ankle | Powered by Shopify</p>
          <img className='d-none d-lg-block' src='../pic/logo.webp'/>
          <div className='footer-icon icon-2'>
          <i className='fab fa-cc-amex'></i>
          <i className='fab fa-cc-paypal'></i>
          <i className='fab fa-cc-mastercard'></i>
          <i className='fab fa-cc-visa'></i>
          <i className='	fab fa-bitcoin'></i>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
