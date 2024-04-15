import { cartContext } from '../App'
import './ProductCard.css'
import React, { useContext } from 'react'
 

// function ProductCard({productName, productCategory, productPrice,imageUrl}) {
  function ProductCard({product}) {
    // console.log(product)
    const {cart, setCart} = useContext(cartContext)

  return (
    <div className='product-card-wrapper'>
     <div className='card'>
      <div className='product-name'>
       {product.itemName}
      </div>
      <img src={product.imgUrl} className='product-image' />
      <div className='card-footer'>
        <span>{product.category}</span>
        <span>Rs. {product.price.toLocaleString('en-IN')}</span>
      </div>
      <div className='button-wrapper'>
        {
          cart.includes(product)?(
            <button onClick={()=>setCart(cart.filter(c=>c.id!==product.id))} className='add-to-cart-button'>
            Remove From Cart
         </button>
          
          ):(
            <button onClick={()=>setCart([...cart,product])} className='add-to-cart-button'>
            Add to Cart 
         </button>
            
          )
        }
      
      
        
        </div>
     </div>
    </div>
  )
}

export default ProductCard