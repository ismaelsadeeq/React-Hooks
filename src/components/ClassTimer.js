import React, { Component } from 'react'

class ClassTimer extends Component {
  interval
  constructor(props) {
    super(props)
  
    this.state = {
       timer:0
    }
  }
  componentDidMount(){
    this.interval = setInterval(()=>{
      this.setState(prevState=>({timer:prevState.timer + 1}))
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  clearTimer(interval){
    clearInterval(this.interval)
  }
  
  render() {
    const {timer} = this.state
    return (

      <div>
        Class timer-{timer}
        <div>
          <button onClick={()=> clearInterval(this.interval)}>Clear</button>
        </div>
      </div>
    )
  }
}

export default ClassTimer
