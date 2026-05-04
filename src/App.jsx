import React from 'react'
import GrandParent from './PropsComponents/GrandParent'
import ContextComponent from './ContextComponent/ContextComponent'
import ContextParent from './ContextComponent/ContextParent'

const App = () => {
  return (
    <div className='app-wrapper'>

{/* <GrandParent/> */}
<ContextComponent>
     <ContextParent/>
</ContextComponent>
    </div>
  )
}

export default App