import React,{useState} from 'react'

function Input() {
  const [firstname, setFirstname]=useState('')
  const [lastname, setLastname]=useState('')

  const submitHandler = (e) =>{
    e.preventDefault();
    alert(`hello ${firstname} ${lastname}`)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
        <label>First Name</label>
        <input type='text' value={firstname} onChange={e=> setFirstname(e.target.value)} />
        </div>
        <div>
        <label>Last Name</label>
        <input type='text' value={lastname} onChange={e=> setLastname(e.target.value)} />
        </div>
        <button  >Submit</button>
      </form>
    </div>
  )
}

export default Input
