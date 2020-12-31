import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts :[],
       errorMessage:[]
    }
  }
  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response =>{
       this.setState({posts:response.data})
      })
      .catch(error =>{
        console.log(error);
        this.setState({errorMessage:'Opps looks like something went wrong'})
      })
  }
  
  render() {
    const {posts, errorMessage} = this.state
    return (
      <div>
        List of Posts
        {
          posts.length ?
          posts.map(post => <div key ={post.id}><h3>{post.title}</h3><p>{post.body}</p></div>)
          :null
        }
        {errorMessage? <div>{errorMessage}</div>:null}
      </div>
    )
  }
}

export default PostList
