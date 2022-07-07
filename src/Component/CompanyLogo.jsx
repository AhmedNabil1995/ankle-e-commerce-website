import React from 'react'
import c1 from '../assets/company-logo-1.png';
import c2 from '../assets/company-logo-2.png';
import c3 from '../assets/company-logo-3.png';
import c4 from '../assets/company-logo-4.png';
import c5 from '../assets/company-logo-5.png';


export default function CompanyLogo() {
  return (
    <div className='company_logo'>
        <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-lg'>
            <div className='img-container'>
                <img src={c1} />
            </div>
        </div>
        <div className='col-md-4 col-lg'>
            <div className='img-container'>
                <img src={c2} />
            </div>
        </div>
        <div className='col-md-4 col-lg'>
            <div className='img-container'>
                <img src={c3} />
            </div>
        </div>
        <div className='col-md-4 col-lg'>
            <div className='img-container'>
                <img src={c4} />
            </div>
        </div>
        <div className='col-md-4 col-lg'>
            <div className='img-container'>
                <img src={c5} />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
