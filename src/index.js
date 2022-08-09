import React from 'react'
import ReactDOM  from 'react-dom'
import BookList from './New-Beginning/BookList'

// function Greeting(){
//   return (
//     <>
//     <Person/>
//     <Message/>
//     </>
//   ) 
// }

function Entry() {
  return <BookList/>
}


const Person = () => <h2>John Doe</h2>
const Message = () => {
  return <p>This is my message</p>
}
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'hello world'))
// }

// ReactDOM.render(<Greeting/>, document.getElementById('root'))
ReactDOM.render(<Entry/>, document.getElementById('root'))