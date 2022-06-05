import React, { Component } from 'react'
import RefstoCCchilc from './RefstoCCchilc'

export class RefsCCParent extends Component {
    constructor(props) {
      super(props)
    this.componentRef = React.createRef()
    }
  clickHandler = ()=>{
    this.componentRef.current.focusInput()
  }
  render() {
    return (
      <div>
          <RefstoCCchilc ref={this.componentRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefsCCParent