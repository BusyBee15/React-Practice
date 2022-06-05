
 //destructuring props in class components - inside render method
import React, { Component } from 'react'

export class DestructuringProps extends Component {
  render() {
      const {name, nickname2}= this.props
    return (
      <div>{name} aka {nickname2}</div>
    )
  }
}

export default DestructuringProps
