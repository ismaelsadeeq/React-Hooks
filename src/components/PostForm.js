import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId:'',
       title:'',
       body:''
    }
  }
  changehandler =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = (e) =>{
    e.preventDefault();
    console.log(this.state);
    axios.post('http://jsonplaceholder.typicode.com/posts', this.state)
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    })
    
  }
  
  render() {
    const {userId,title,body}= this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input placeholder="Id" type="text" name="userId" value={userId} onChange={this.changehandler}></input>
          </div>
          <div>
            <input placeholder="Title" type="text" name="title" value={title} onChange={this.changehandler}></input>
          </div>
          <div>
            <textarea placeholder="Body" type="text" name="body" value={body} onChange={this.changehandler}></textarea>
          </div>
          
          <button type="submit">Submit</button>
        </form>
 </div>
    )
  }
}

export default PostForm
