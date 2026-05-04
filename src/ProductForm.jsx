import React, { useState } from 'react'

const ProductForm = () => {
    let [product,setProduct]=useState()
    function onChangeFunction(e){
        console.log("We are changing something");
        console.log(e.target.value);
        setProduct(prev=>({[e.target.name:e.target.value]}))
        
        
    }

  return (
    <>
    <form>
        <div>
            <input type="text" name='name' value={product.name || ""} onChange={()=>{onChangeEvent()}}></input>
        </div>
    </form>

    </>
  )
}

export default ProductForm