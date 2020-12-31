import React, {useState,useEffect} from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle';

function DocTitleOne() {
  
  const [count, setCount] = useState(0); 

  const increment = () =>{
    setCount(count +1);
  }

  useDocumentTitle(count)
  return (
    <div>
      <button onClick={increment}>count {count} </button>
    </div>
  )
}

export default DocTitleOne
 