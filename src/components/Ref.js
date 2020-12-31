import React,{useEffect,useRef} from 'react'

function Ref() {

  const inputRef =  useRef(null)

  useEffect(()=>{
    ///focus input
    inputRef.current.focus()
  },[])
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Email'></input>
      <input type='text' placeholder='Password'></input>
    </div>
  )
}

export default Ref
