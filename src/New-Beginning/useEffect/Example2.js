import React, {useState, useEffect} from 'react'

//dependency list 
const Example2 = () => {
  const [value, setValue] = useState(0)
  
  useEffect(()=>{
    if(value>0){
        document.title = `New message(${value})`
    }
  }, [value])
  
  return (
    <>
    <h4>{value}</h4>
    <button className='btn' onClick={()=> setValue(value+1)}>Click me</button>
    </>
  )
}

export default Example2