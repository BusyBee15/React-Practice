import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'anu'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'anu'
            })
        }, 2000)
    }
  render() {
      console.log("******Parent comp*******")
    return (
      <div>
        <Memo name={this.state.name}/>
         {/*  <PureComp name={this.state.name}/>
          <RegularComp name={this.state.name}/>
          */}
      </div>
    )
  }
}

export default ParentComp