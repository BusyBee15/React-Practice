import React, { useState } from 'react'

const SimpleCounter = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)

  const complexIncrease = () => {
    setTimeout(()=>{
      // setValue2(value2+1)
      setValue2((prevState)=>prevState+1)
    },2000)
  }
  return (
    <>
    <section style={{margin:"4rem 0"}}>
      <h2>direct update counter</h2>
      <h2>{value1}</h2>
      <button className='btn' onClick={()=>setValue1(value1 + 1)}>Increase</button>
      <button className="btn" onClick={()=>setValue1(value1 - 1)} >Decrease</button>
      <button className="btn" onClick={()=>setValue1(0)}>Reset</button>
    </section>
    
    <section style={{margin:"4rem 0"}}>
      <h2>function update counter</h2>
      <h2>{value2}</h2>
      <button className='btn' onClick={complexIncrease}>Increase</button>
     
    </section>
    </>
  )
}

export default SimpleCounter