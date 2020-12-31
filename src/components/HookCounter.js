import React, {useState} from 'react'

function HookCounter() {
  
  const [count, setCount] = useState(0); 

  const increment = () =>{
    setCount(count +1);
  }

  return (
    <div>
      <button onClick={increment}>count {count} </button>
    </div>
  )
}

export default HookCounter
