import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/post?pageLimit=10&currentPage=0')
    .then(res=>{
      console.log(res);
      setPosts(res.data.data.posts)
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return (
    <div>
      <ul>
        {
          posts.map(post => <li key ={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching
