import React,{useContext} from 'react'
import ComponentE from './ComponentE'
import { NameProvider, PictureProvider ,CountContext } from './userContext'

function ComponentD() {
  // return (
  //   <NameProvider value='Sadeeq'>
  //     <PictureProvider value='C Sadeeq'>
  //     <ComponentE />
  //     </PictureProvider>
  //   </NameProvider>
    
  // )
  const countContext = useContext(CountContext)
  return (
    <div>
      Component A
      <button onClick={()=>{countContext.CountDispatch('increment')}}>Increment</button>
      <button onClick={()=>{countContext.CountDispatch('decrement')}}>Decrement</button>
      <button onClick={()=>{countContext.CountDispatch('reset')}}>Reset</button>
    </div> 
  )
}

export default ComponentD
