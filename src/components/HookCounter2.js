import React ,{useState} from 'react'

function HookCounter2() {

  const initialCount = 0;
  const [count , setCount] = useState(initialCount);

  const reset = () =>{
    setCount(0);
  }
  const increment = () =>{
    setCount(prevCount => prevCount +1);
  }
  const decrement = () =>{
    setCount(prevCount => prevCount -1);
  }
  const incrementFive = () =>{
    for(let i =0; i < 5; i++){
      setCount(prevCount => prevCount +1)
    }
  }

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

export default HookCounter2
