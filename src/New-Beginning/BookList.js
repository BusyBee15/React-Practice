import React from 'react'
//CSS
import '../index.css';


//set up vars
const firstBook = {
    title :"I love you to the moon and back",
    author : "Sam McBratney",
    img : "https://imgs.search.brave.com/sAdEtLeJyI1wG7Gsq23rVqhiq0OUL75QwEIWAVMsUAk/rs:fit:969:1000:1/g:ce/aHR0cHM6Ly9jcnlz/dGFsYW5kY29tcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDQvbW9vbi1h/bmQtYmFjay5qcGc"
}

const secondBook = {
   title : "Reminders of Him:",
   author : " Colleen Hoover ",
   img : "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg"
}

function BookList() {
   return (
   <section className='booklist'>
    <Book 
       img={firstBook.img} 
       title={firstBook.title} 
       author={firstBook.author}
    ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vel iusto sint veritatis, atque repudiandae iste debitis temporibus nihil consectetur!</p> </Book>
    <Book 
       img={secondBook.img} 
       title={secondBook.title} 
       author={secondBook.author}
    />
   </section>
   
   )
}

const Book = ({img, title, author, children} ) => {
//    const {img, title, author} = props
    return  <article className='book'>
    <img 
        src={img}
        style={{width:"250px",height:"325px"}}alt=""
    />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
    </article>
}



export default BookList