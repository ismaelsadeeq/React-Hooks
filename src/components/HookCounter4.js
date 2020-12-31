import React,{useState} from 'react'

function HookCounter4() {

  const [items, setItems] = useState([])

  const handleSubmit = (event)=>{
    event.preventDefault();
    const input = document.querySelector('[type="text"]');
    const item = input.value;
    setItems([... items, {
      id:item.length,
      value:item
    }])
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="item" onChange={e => e.target.value}/>
      <button type='submit'>Add item</button>
      </form>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.value}</li> )
        }
      </ul>
    </div>
  )
}

export default HookCounter4
