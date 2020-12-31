import React, {useState,useMemo} from 'react'

function Memo() {
  
  const [count, setCount] = useState(0); 
  const [count2, setCount2] = useState(0); 

  const increment = () =>{
    setCount(count +1);
  }
  const increment2 = () =>{
    setCount2(count2 +1);
  }
  const isEven = useMemo(()=>{
    let i = 1;
    while(i<200000000) i++
    return count % 2 === 0
  },[count])

  return (
    <div>
      <button onClick={increment}>counter {count} </button>
      <span>{isEven?'even':'Odd'}</span>
      <button onClick={increment2}>counterTwo {count2} </button>
    </div>
  )
}

export default Memo
