import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchGetpost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const clickHandler = () =>{
    setIdFromButtonClick(id)
  }

  useEffect(()=>{
    axios.get(`http://localhost:3001/post/${idFromButtonClick}`)
    .then(res=>{
      console.log(res);
      setPost(res.data)
    })
    .catch(err =>{
      console.log(err);
    })
  },[idFromButtonClick])
  return (
    <div>
      <input type="text" value={id} onChange={e =>{ setId(e.target.value)}}/>
      <button type="button" onClick={clickHandler}>Fetch Post</button>
      <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      </div>
    </div>
  )
}

export default DataFetchGetpost
