import React, {useState} from 'react'

const Example1 = () => {
  const [text, setText] = useState("Random title")
  const handleClick = () => {
    if(text === "hello world"){
        setText("random title")
    }else {
        setText("hello world")
    }
  }
  return (
    <>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>change title</button>
    </>
  )
}

export default Example1