import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Products.css'
import { useNavigate } from 'react-router-dom'
import {addToCart,addToFavorite} from './Helper'
import { getcount } from '../Redux/CountSlice'
import { getByName } from '../Redux/ProductsSlice'
import {getByColor} from '../Redux/ProductsSlice'
import { getBySize } from '../Redux/ProductsSlice'
import { useState } from 'react'
export default function Products() {
        let navigate = useNavigate()
        let dispatch = useDispatch()
      let products =  useSelector(state=>state.products.val)
      let showAllProducts = products.map((product,index)=>{
        return (
                <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                    <div className='product'>
                        <img src={product.pic} />
                        <div className='product-info'>
                            <div className='text'>
                            <p>{product.name}</p>
                            <span>$ {product.price}.00</span>
                            <div style={{marginTop:'5px'}}>
                            {product.color.map((c,i)=>{
                                return (
                                <span key={i}
                                 style={{ border:'1px solid white',marginLeft:'5px',display:'inline-block',backgroundColor:`${c}`,borderRadius:'50%',width:'20px',height:'20px'}}>
                                </span>
                                )
                            })}
                            </div>
                            <div style={{marginTop:'5px'}}>
                            {product.size.map((s,i)=>{
                                return (
                                <div key={i}
                                 style={{ border:'1px solid white',marginLeft:'5px',display:'inline-block',color:'white',borderRadius:'50%',width:'30px',height:'30px',backgroundColor:'black',fontSize:'18px'}}>
                                    {s}
                                </div>
                                )
                            })}
                            </div>
                            </div>
                        </div>
                        <div className='controller'>
                            <button className='view' onClick={()=>showProduct(product.id)}>
                                <i className="fa-solid fa-eye"></i></button>

                            <button className='add' onClick={()=>add(product)}>
                                <i className="fa-solid fa-cart-shopping">
                                </i> Add To Cart</button>
                                
                            <button className='favourite' onClick={()=>addToFavorite(product)}>
                                <i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
        )
      })  

      const showProduct=(id)=>{
        
        navigate(`/Products/${id}`)
      }

      const add = (product)=>{
          if(addToCart(product) == 'please login first') navigate(`/login`)
          dispatch(getcount());
      }

      const displayPrductsByName = (e)=>{
                dispatch(getByName(e.target.value));
      }

      const displayPrductsByColor = (e)=>{
        dispatch(getByColor(e.target.value));
     }

     const displayPrductsBySize = (e)=>{
        dispatch(getBySize(e.target.value));
     }


  return (
    <div className='products'>
        <div className='container'>
            <div className='products-filter-search'>
                <input type='text' placeholder='Search by name...' onChange={displayPrductsByName}/>
                <div>
                    <label>Filter By Color:</label>
                <select onChange={displayPrductsByColor}>
                    <option>All</option>
                    <option>red</option>
                    <option>green</option>
                    <option>blue</option>
                    <option>pink</option>
                    <option>black</option>
                    <option>grey</option>
                    <option>orange</option>
                    <option>white</option>
                </select>
                <label>Filter By Size:</label>
                <select onChange={displayPrductsBySize}>
                    <option>All</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>  
                </select>
                </div>
            </div>    
            <div className='row g-4'>
                {showAllProducts}
            </div>
            </div>
    </div>
  )
}
