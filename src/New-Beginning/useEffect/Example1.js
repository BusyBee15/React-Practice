import React, { useEffect, useState } from 'react'

//updating document title 
const Example1 = () => {
  const [value, setValue] = useState(0)
  
  useEffect(()=>{
    if(value>0){
        document.title = `New message(${value})`
    }
  })
  
  return (
    <>
    <h4>{value}</h4>
    <button className='btn' onClick={()=> setValue(value+1)}>Click me</button>
    </>
  )
}

export default Example1