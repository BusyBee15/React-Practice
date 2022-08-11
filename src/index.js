import React from 'react'
import ReactDOM  from 'react-dom'

import './index.css'

import { books } from './New-Beginning/Books'
import Book from './New-Beginning/Book'

function BookList() {
   return (
   <section className='booklist'>
 
    {books.map((book)=>{
        return <Book key={book.id} {...book}/>
    })}
   </section>
   )
}


ReactDOM.render(<BookList/>, document.getElementById('root'))


//    const {img, title, author} = props.book
{/* {books.map((book, index)=>{ */}
    {/* {books.map((book)=>{
        //   const {img, title, author} = book
        //   return <Book img={img} title={title} author={author}/>
        //   return <Book key={index} book={book}/>
        return <Book key={book.id} book={...book}/>
        
    })} */}
// const Book = ({img, title, author, children} ) => {





// function Greeting(){
//   return (
//     <>
//     <Person/>
//     <Message/>
//     </>
//   ) 
// }
// const Person = () => <h2>John Doe</h2>
// const Message = () => {
//   return <p>This is my message</p>
// }
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'hello world'))
// }

// ReactDOM.render(<Greeting/>, document.getElementById('root'))