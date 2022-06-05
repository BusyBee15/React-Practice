import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn:false
      }
      console.log("constructor - conditional rendering")
    }

  render() {
    console.log("render conditional rendering")
     //First approach - if else
     // if(this.state.isloggedIn){
     //     return <div>Welcome Anu</div>
     // }
     // else return <div>Welcome guest</div>

     //2nd - JS variables
    // let msg 
    // if(this.state.isloggedIn){
    //     msg = <div>Welcome Anu</div>
    // }else{
    //     msg = <div>Welcome guest</div>
    // }

    // return <div>{msg}</div>

    //3rd- ternary operator - it can be used inside JSX
    //mostly used
    return(
        this.state.isloggedIn?<div>Welcome Anu</div>:<div>Welcome guest</div>
    )
    
    //4th - specific case of ternary operator, when u want to render something or nothing
    //return this.state.isloggedIn && <div>Welcome Anu</div>
  }
}

export default ConditionalRendering