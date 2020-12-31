import React,{useContext} from 'react'
import CompnentG from './CompnentG'
import {UserContext,PictureContext,CountContext} from './userContext'
function ComponentF() {
  // const user = useContext(UserContext)
  // const picture = useContext(PictureContext)
  const countContext = useContext(CountContext)

  return (
    // <div>
    //   <CompnentG />
    //   <h1> My name is{user} {picture}</h1> 
    // </div>
    <div>
    Component A
    <button onClick={()=>{countContext.CountDispatch('increment')}}>Increment</button>
    <button onClick={()=>{countContext.CountDispatch('decrement')}}>Decrement</button>
    <button onClick={()=>{countContext.CountDispatch('reset')}}>Reset</button>
  </div> 
  
  )
}

export default ComponentF
