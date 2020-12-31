import React, {useState, useEffect} from 'react'

function UseEffect() {

  const [count, setCount] = useState(0); 
  const [name, setName] = useState('')

  useEffect(()=>{
    console.log('useEffect Updating doc title');
    document.title = `clicked ${count} times`
  },[count])

  const increment = () =>{
    setCount(count +1);
  }

  return (
    <div>
      <input type ='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={increment}>count {count} </button>
    </div>
  )
}

export default UseEffect
