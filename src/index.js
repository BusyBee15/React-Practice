import React from 'react'
import ReactDOM  from 'react-dom'

function Greeting(){
  return 
    <div>
       <h4>Hello</h4>
    </div>
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'hello world'))
// }

// ReactDOM.render(<Greeting/>, document.getElementById('root'))
ReactDOM.render(<Greeting/>, document.getElementById('root'))