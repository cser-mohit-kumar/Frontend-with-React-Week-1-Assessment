import React from 'react'
import ContextChild from './ContextChild'

const ContextParent = () => {
  return (
    <div className='context-parent-card'>
        <ContextChild/>
    </div>
  )
}

export default ContextParent