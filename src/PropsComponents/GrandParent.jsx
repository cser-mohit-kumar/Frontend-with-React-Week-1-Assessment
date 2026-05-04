import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
  return (
    <div className='grandparent-card'>
        <h2>GrandParent Component</h2>
        <Parent value={{surname:"ShaktiMan"}}/>
    </div>
  )
}

export default GrandParent