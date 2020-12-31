import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/post?pageLimit=10&currentPage=0')
    .then(res=>{
      console.log(res);
      setLoading(false)
      setPosts(res.data.data.posts)
      setError('')
    })
    .catch(err => {
      setLoading(false)
      setPosts([])
      setError('Something went wrong')
      console.log(err);
    })
  },[])
  return (
    <div>
      <ul>
        {
          loading ? 'Loading':
          posts.map(post => <li key ={post.id}>{post.title}</li>)
        }
        { error ? error: null}
      </ul>
    </div>
  )
}

export default DataFetching
