import React from 'react'

const UseOfProps = (props) => {
    console.log(props)
  return (
    <div>
       <h1>hello {props.name}, She {props.abc}</h1>
       <h2>{props.children}</h2>
    </div>
    
  )
}

export default UseOfProps