import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState ={
  posts:[],
  error:'',
  loading:true
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        error:'',
        posts: action.payload,
        loading:false
      };
    case 'FETCH_ERROR':
      return {
        posts:{},
        loading:false,
        error:'Something went wrong'
      }
    default:
      return state
  }
}
function Two() {
  const [state,dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    axios.get('http://localhost:3001/post?pageLimit=10&currentPage=0')
    .then(res=>{
      console.log(res);
      dispatch({type:'FETCH_SUCCESS',payload:res.data.data.posts})
    })
    .catch(err => {
      console.log(err);
      dispatch({type:'FETCH_ERROR'})
    })
  },[])

  return (
    <div>
      {
          state.loading ? 'Loading':
          state.posts.map(post => <li key ={post.id}>{post.title}</li>)
        }
        { state.error ? state.error: null}
    </div>
  )
}

export default Two
