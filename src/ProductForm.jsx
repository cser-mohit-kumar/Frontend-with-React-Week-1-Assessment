import React, { useState } from 'react'

const ProductForm = () => {
    let [product,setProduct]=useState()
    function onChangeFunction(e){
        console.log("We are changing something");
        console.log(e.target.value);
        setProduct(prev=>({[e.target.name]:e.target.value}))
        
        
    }

  return (
    <>
    <form className='product-form'>
        <h3>Add Product</h3>
        <div className='form-group'>
            <input type="text" name='name' placeholder='Enter product name' value={product?.name || ""} onChange={(e)=>{onChangeFunction(e)}}></input>
        </div>
    </form>

    </>
  )
}

export default ProductForm