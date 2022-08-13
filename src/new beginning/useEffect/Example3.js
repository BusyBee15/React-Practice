import React, { useEffect, useState } from 'react'

//clean up function
const Exaample3 = () => {
  const [size, setSize] = useState(window.innerWidth)

  const changeSize = () => {
       setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', changeSize)
    // return ()=>{
    //   window.removeEventListener('resize', changeSize)
    // }
  }, [])
  
  return (
    <>
    <h4>{size} px</h4>
    </>
  )
}

export default Exaample3