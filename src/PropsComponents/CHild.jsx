import React from 'react'

const CHild = (childProps) => {
    console.log(childProps);
    
  return (
    <div className='child-card'>
        <h3>THis is the Surname in the CHild Component</h3>
        <hr />
        <p className='surname-text'>{childProps.value.value.surname}</p>
    </div>
  )
}

export default CHild