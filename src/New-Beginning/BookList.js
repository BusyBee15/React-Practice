import React from 'react'
//CSS
import '../index.css';


//set up vars
const books = [
{
    id: 1,
    title :"I love you to the moon and back",
    author : "Sam McBratney",
    img : "https://imgs.search.brave.com/sAdEtLeJyI1wG7Gsq23rVqhiq0OUL75QwEIWAVMsUAk/rs:fit:969:1000:1/g:ce/aHR0cHM6Ly9jcnlz/dGFsYW5kY29tcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDQvbW9vbi1h/bmQtYmFjay5qcGc"
},
{  
   id: 2,
   title : "Reminders of Him:",
   author : " Colleen Hoover ",
   img : "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg"
}
]

function BookList() {
   return (
   <section className='booklist'>
 
    {books.map((book)=>{
        return <Book key={book.id} {...book}/>
    })}
   </section>
   )
}

const Book = (props) => {
    const clickHandler = (e) => {
       console.log(e)
       console.log(e.target)
       alert("hellow world")
    }
    const compEg = (author) => {
        console.log(author)
    }
    const {img, title, author} = props
    return  <article className='book' onMouseOver={()=>{
        console.log(title)
    }}>
    <img 
        src={img}
        style={{width:"250px",height:"325px"}}alt=""
        />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4 onClick={function(){console.log(author)}}>{author}</h4>
    <button onClick={clickHandler}>Click me</button>
    <button onClick={()=>compEg(author)}>more complex eg</button>
    </article>
}

export default BookList


//    const {img, title, author} = props.book
{/* {books.map((book, index)=>{ */}
    {/* {books.map((book)=>{
        //   const {img, title, author} = book
        //   return <Book img={img} title={title} author={author}/>
        //   return <Book key={index} book={book}/>
        return <Book key={book.id} book={...book}/>
        
    })} */}
// const Book = ({img, title, author, children} ) => {