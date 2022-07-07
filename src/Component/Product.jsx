import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { useState } from 'react'
import { addToCart } from './Helper'
import { getcount } from '../Redux/CountSlice'
export default function Product() {
     let navigate = useNavigate()
     let dispatch = useDispatch()
    let [count,setcount] = useState(1)
    let {id} = useParams()
    let products = useSelector(state=>state.products.val)
    let product = products.find((product)=>{
        return product.id == id;
    })

    const increase = ()=>{
        if(count<9){
        setcount(++count)
        }
    }

    const decrease = ()=>{
        if(count>1){
        setcount(--count)
        }
    }

    const add = (product)=>{
        if(addToCart(product) == 'please login first') navigate(`/login`)
        dispatch(getcount());
    }

    const checkout =(product)=>{
        navigate('/checkout')
        add(product)
    }
  return (
    <div className='product-info'>
      <div className='container'>
      <div className='row'>
        <div className='col-6'>
            <img src={`../${product.pic}`} />
        </div>
        <div className='col-6'>
            <h4>{product.name}</h4>
            <hr />
            <p>Price : <span>$ {product.price*count}.00</span></p>
            <p>{product.desc}</p>
            <label>Size</label>
            <select>
            {product.size.map((s,i)=>{
                return <option key={i}>{s}</option>
            })}
            </select>
            <label>Color</label>
            <select>
            {product.color.map((c,i)=>{
                return <option key={i}>{c}</option>
            })}
            </select>
            <label>Quantity</label>
            <div className='controller'>
                <div className='count'>
                    <button onClick={decrease}>-</button>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                </div>
                <button className='add' onClick={()=>add(product)}>
                    <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                </button>
                <button className='add' onClick={()=>checkout(product)}>
                    <i className="fa-solid fa-share"></i> Buy It Now
                </button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
