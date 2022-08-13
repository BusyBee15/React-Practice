const Book = (props) => {
    const {img, title, author} = props
    return  <article className='book'>
    <img 
        src={img}
        style={{width:"250px",height:"325px"}}alt=""
        />
    <h1>{title}</h1>
    <h4>{author}</h4>
    </article>
}

export default Book








// const Book = (props) => {
//     const clickHandler = (e) => {
//        console.log(e)
//        console.log(e.target)
//        alert("hellow world")
//     }
//     const compEg = (author) => {
//         console.log(author)
//     }
//     const {img, title, author} = props
//     return  <article className='book' onMouseOver={()=>{
//         console.log(title)
//     }}>
//     <img 
//         src={img}
//         style={{width:"250px",height:"325px"}}alt=""
//         />
//     <h1 onClick={() => console.log(title)}>{title}</h1>
//     <h4 onClick={function(){console.log(author)}}>{author}</h4>
//     <button onClick={clickHandler}>Click me</button>
//     <button onClick={()=>compEg(author)}>more complex eg</button>
//     </article>
// }