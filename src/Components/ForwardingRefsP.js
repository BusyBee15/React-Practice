import React, { Component } from 'react'
import ForwardingRefsC from './ForwardingRefsC'

export class ForwardingRefsP extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    clickHandler(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          <ForwardingRefsC ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ForwardingRefsP