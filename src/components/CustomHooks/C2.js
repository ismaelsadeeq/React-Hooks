import React ,{useState} from 'react'
import useCounter from '../Hooks/useCounter'

function C2() {
  const [count,increment,decrement,incrementFive,reset ] = useCounter(5)

  return (
    <div>
     <div>count : {count}</div> 
      <button onClick={reset}>reset Count</button>
      <button onClick={increment}>Increment Count </button>
      <button onClick={decrement}> Decrement Count </button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default C2
