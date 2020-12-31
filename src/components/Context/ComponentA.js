import React,{useContext} from 'react'
import { CountContext } from './userContext'

function ComponentA() {
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

export default ComponentA
