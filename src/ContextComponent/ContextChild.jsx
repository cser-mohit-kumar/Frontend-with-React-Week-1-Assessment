import React, { useContext } from 'react'
import { contextAPI } from './ContextComponent'
import { getProducts, pathProduct, postProduct } from '../APIServiceLayer/APIRequests'
const ContextChild = () => {
// let {Consumer}=contextAPI
let data = useContext(contextAPI)
  return (
    <div className='context-child-card'>
      <p className='context-name'>{data.name}</p>
      <h2 className='counter'>{data.state.count}</h2>
      <div className='btn-group'>
        <button className='btn btn-increment' onClick={()=>{
          data.updateState({count:data.state.count+1})
        }}>Increment</button>
        <button className='btn btn-decrement' onClick={()=>{
          data.updateState({count:data.state.count-1})
        }}>Decrement</button>
        <button className='btn btn-action' onClick={()=>{
          postProduct()
        }}>Post the Data</button>
        <button className='btn btn-action' onClick={()=>{
          pathProduct("7bfFoRAO1vU", {city:"Ramgudh"})
        }}>Patch the ID</button>
        <button className='btn btn-action' onClick={()=>{
          getProducts()
        }}>Get Products</button>
{/* <Consumer>{(value)=>{console.log(value)}}
</Consumer> */}
        <button className='btn btn-warning' onClick={()=>putProduct("aUfwEV-WWfM",{name:"updated",friend:"updated"})}>Put Data</button>
        <button className='btn btn-danger' onClick={()=>deleteProducts("14OaAfy_yUg")}>Delete</button>
      </div>
    </div>
  )
}
export default ContextChild