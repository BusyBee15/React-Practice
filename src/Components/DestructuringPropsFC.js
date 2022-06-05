//Destructuring in functional component
import React from 'react'

function DestructuringProps({name, nickname2}) {
  return (
    <div>{name} aka {nickname2}</div>
  )
}
//Another way is to destructure it in the function body - outside(above) return statement
export default DestructuringProps

//import React from 'react'
//
//function DestructuringProps(props) {
//    const {name, nickname1} = props
//  return (
//     
//    <div>{name} aka {nickname1}</div>
//  )
//}
//
//export default DestructuringProps