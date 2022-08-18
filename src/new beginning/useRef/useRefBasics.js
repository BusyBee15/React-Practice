import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {
  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }
//   console.log(refContainer)
  useEffect(()=>{
    refContainer.current.focus()
  })
  return (
    <form className='form' onSubmit={handleSubmit}>
        <div>
            <input type="text" ref={refContainer} />
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default UseRefBasics