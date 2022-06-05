import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethAsPropParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childname){
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }
  render() {
    return (
      <div>
          <MethodsAsPropsChild greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default MethAsPropParent