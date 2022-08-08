import React from 'react'
//CSS
import './index.css';

function BookList() {
   return (
   <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
   </section>
   
   )
}

const Book = () => {
    return  <article className='book'>
    <Image/>
    <Title/>
    <Author/>
    </article>
}

const Image = () => <img src="https://imgs.search.brave.com/sAdEtLeJyI1wG7Gsq23rVqhiq0OUL75QwEIWAVMsUAk/rs:fit:969:1000:1/g:ce/aHR0cHM6Ly9jcnlz/dGFsYW5kY29tcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDQvbW9vbi1h/bmQtYmFjay5qcGc"   alt="" />


const Author = () => <h4>Sam McBratney</h4>

const Title = () => <h1>I love you to the moon and back</h1>

export default BookList