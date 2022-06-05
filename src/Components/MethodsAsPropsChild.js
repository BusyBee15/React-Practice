import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default MethodsAsPropsChild