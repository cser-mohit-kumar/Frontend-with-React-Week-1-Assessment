import React from 'react'
import CHild from './CHild';

const Parent = (props) => {
  return (
    <div className='parent-card'>
        <h3>The Surname of the Parent is {props.value.surname}</h3>
        <CHild value={props} />
    </div>
  )
}

export default Parent