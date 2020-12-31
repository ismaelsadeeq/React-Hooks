import React,{useState, useEffect} from 'react'

function Mouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Event');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    console.log('Effext called');
    window.addEventListener('mousemove', logMousePosition)

    return () =>{
      console.log('unmounting component');
      window.removeEventListener('mousemove', logMousePosition)
    }
  },[])

  
  return (
    <div>
      Hooks X -{x}  and Y --{y}
    </div>
  )
}

export default Mouse
