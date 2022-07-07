import React from 'react'
import cat1 from '../assets/category-img-02.png';
import cat2 from '../assets/category-img-03.png';
import cat3 from '../assets/category-img-04.png';

export default function Terending() {
  return (
    <div className='trending'>
            <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-3'>
                    <div className='text'>
                        <p>Trending in this Season</p>
                        <h1>Somthing New In Treands</h1>
                        <div className='arrow'>
                        <i class="fa-solid fa-arrow-left-long arrow"></i>
                        <i class="fa-solid fa-arrow-right-long arrow"></i>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={cat1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ryanlo</h5>
                                <p className="card-text">10 items</p>
                                <a href="#" className="btn btn-primary"><i class="fa-solid fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={cat2}className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ashely William</h5>
                                <p className="card-text">10 items</p>
                                <a href="#" className="btn btn-primary"><i class="fa-solid fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={cat3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Raf simons</h5>
                                <p className="card-text">10 items</p>
                                <a href="#" className="btn btn-primary"><i class="fa-solid fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}
