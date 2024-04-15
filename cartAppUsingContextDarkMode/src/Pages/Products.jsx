import React from 'react'
import './Products.css'
import ProductCard from '../Components/ProductCard'
import {productData} from '../data/productData'


function Products() {
  return (
    <>
    <div>
   
    </div>
     <div className='product-list'>
     
     {productData.map((product,id)=> (
      <ProductCard key={id} product={product} />
      // <ProductCard key={id} productName={product.itemName} productCategory={product.category} productPrice={product.price} imageUrl={product.imgUrl}/>
     ))}  
   </div>
    </>
   
  )
}

export default Products