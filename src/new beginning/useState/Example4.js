import React, { useState } from 'react'

//useState with multiple state values
const Example4 = () => {
  const [name, setName] = useState('peter')
  const [age, setage] = useState(24)
  const [message, setmessage] = useState('first message')

  return (
    <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={()=> setmessage("hello world")}>change message</button>
    </>
  )
}

export default Example4