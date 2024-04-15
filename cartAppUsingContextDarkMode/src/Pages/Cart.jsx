import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../App'
import ProductCard from '../Components/ProductCard'
import './Cart.css'

function Cart() {
  const [total, setTotal] = useState(0)
  const {cart,setCart} = useContext(cartContext)
  // console.log(cart)
  useEffect(()=>{
    setTotal(cart.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0))

  },[cart])
  return (
    <div className='cart-wrapper'>
      <h1 style={{textAlign:'center'}}>Total Price: Rs. {total.toLocaleString('en-IN')}</h1>
     <div className='cart-list'>
      {cart.map((product,id)=> (
       <ProductCard key={id} product={product} />
      ))}

    
   
    </div>
    </div>
   
  )
}
export default Cart