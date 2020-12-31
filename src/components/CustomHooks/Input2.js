import React from 'react'
import useInput from '../Hooks/useInput'

function Input2() {

  const [firstname,resetFirstname,bindFirstname] =useInput('')
  const [lastname,resetLastname,bindLastname] =useInput('')

  const submitHandler = (e) =>{
    e.preventDefault();
    alert(`hello ${firstname} ${lastname}`)
    resetFirstname()
    resetLastname( )
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
        <label>First Name</label>
        <input type='text' {...bindFirstname} />
        </div>
        <div>
        <label>Last Name</label>
        <input type='text' {...bindLastname } />
        </div>
        <button  >Submit</button>
      </form>
    </div>
  )
}

export default Input2
