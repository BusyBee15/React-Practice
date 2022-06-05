import React, { Component } from 'react'

export class StateandSetstate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
    console.log(this)
  }
 incrementFive(){
     this.increment()
     this.increment()
     this.increment()
     this.increment()
     this.increment()
 }

 increment(){
   //  this.setState({
   //      count:this.state.count+1
   //  })
   this.setState((prevstate)=>({
       count:prevstate.count+1 //its not prevstate+1, prevstate is an object
   }))
    

 }

  render() {
    return (
      <div>
          <p>Count - {this.state.count}</p>
          <button onClick={()=>this.incrementFive()}>IncrementFive</button>
          <button  onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default StateandSetstate