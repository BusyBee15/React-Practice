import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
      console.log("*****Pure comp***")
    return (
      <div>Pure Comp {this.props.name}</div>
    )
  }
}

export default PureComp