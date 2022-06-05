import React, { Component } from 'react'

export class BindingEventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"hello"
      }
      /*Third method - binding EH in constructor*/
      // This is the method used in official REACT documentation
      this.changeState = this.changeState.bind(this)

    }

    changeState(){
        this.setState({
            msg:"bye"
        })
    }
    
    //Use arrow function as class property- Change the way you define your method
    //changeState = () =>{
    //    this.setState({
    //        msg:'bye'
    //    })
    //}

  render() {
    return (
      <div>
            <p>state property value {this.state.msg}</p>
            {/*First method to bind event handler - use bind keyword inside render*/ }
           {/* <button onClick={this.changeState.bind(this)}>Click</button> */}

           {/*Second method - use of arrow functions*/}
           {/* <button onClick={()=>this.changeState()}>Click</button> */}

           <button onClick={this.changeState}>Click</button>


         
      </div>
    )
  }
}

export default BindingEventHandler