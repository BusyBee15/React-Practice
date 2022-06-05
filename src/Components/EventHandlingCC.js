import React, { Component } from 'react'

export class EventHandlingCC extends Component {
    clickHandler() {
        console.log('button clicked in CC')
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click</button>
    )
  }
}

export default EventHandlingCC