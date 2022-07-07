import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import {addToCart, getFromFavorite,removeFromFavorite} from './Helper'
import { change } from '../Redux/CartChange'
import { getcount } from '../Redux/CountSlice'
export default function Users() {
    let ch = useSelector(state=>state.changeCart)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    const deleteProduct = (product)=>{
        dispatch(change())
        removeFromFavorite(product)
    }
    
    let products =  getFromFavorite();
    console.log(products)
    let showAllProducts = products.map((product,index)=>{
        return (
                <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                    <div className='product'>
                        <img src={product.pic} />
                        <div className='product-info'>
                            <div className='text'>
                            <p>{product.name}</p>
                            <span>$ {product.price}.00</span>
                            </div>
                        </div>
                        <div className='controller'>
                            <button className='view' onClick={()=>showProduct(product.id)}>
                                <i className="fa-solid fa-eye"></i></button>
                                

                            <button className='add' onClick={()=>deleteProduct(product)}>
                                 Remove</button>
                                
                            <button className='favourite' onClick={()=>add(product)}>
                                <i className="fa-solid fa-cart-shopping">
                                </i></button>
                        </div>
                    </div>
                </div>
        )
      })  

      const showProduct=(id)=>{
        navigate(`/Products/${id}`)
      }

      const add = (product)=>{
        addToCart(product)
        dispatch(getcount());
    }

  return (
    <div className='products'>
        <div className='container'>
        <div className='row g-4'>
            {products.length?showAllProducts:<h3>There is no product in Favourite</h3>}
        </div>
        </div>
    </div>
  )
}
