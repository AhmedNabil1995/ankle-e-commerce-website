import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './Cart.css'
import { getFromCart } from './Helper'
import { hide } from '../Redux/CartSlice'
import { useNavigate } from 'react-router'
export default function Cart() {

    let right = useSelector(state=>state.cart);
    let dispatch = useDispatch();
    let navigate = useNavigate()
    
    let products = getFromCart();

let showInCart = products.map((product,index)=>{
        return (
            <div key={index} className='cart-product'>
            <div className='row my-2'>
                <div className='col-3'>
                    <img src={product.pic}/>
                </div>
                <div className='col-9'>
                    <p>{product.name}</p>
                    <p>price : $ {product.price}.00</p>
                </div>
            </div>
            <hr />
        </div>
        ) 
})

const go =()=>{
    navigate('/cartProducts')
    dispatch(hide())
}

const checkout =()=>{
    navigate('/checkout')
    dispatch(hide())
}

  return (
    <div className='cart' style={{right:`${right.val}px`}}>
        <div className='close' onClick={()=>dispatch(hide())}>X</div>
        {showInCart}
        <button className='btn btn-danger my-2' onClick={go}>Show All In Cart</button>
        <button className='btn btn-success ms-2 my-2' onClick={checkout}>Checkout</button>
    </div>
  )
}
