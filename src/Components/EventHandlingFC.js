import React from 'react'

function EventHandlingFC() {
    function clickHandler(){
        console.log('button clicked')
    }
  return (
    <button onClick={clickHandler}>Click</button> 
  )
}

export default EventHandlingFC