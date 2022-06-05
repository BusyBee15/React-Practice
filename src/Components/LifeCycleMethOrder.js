import React, { Component } from 'react'

export class LifeCycleMethOrder extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Anu'
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(props, state){
      console.log("get derived state")
      return null //or new object ..?
  }
  componentDidMount(){
      console.log("component did mount")
  }
  render() {
      console.log('render')
    return (
      <div>Life Cycle Methods Order of execution</div>
    )
  }
}

export default LifeCycleMethOrder




