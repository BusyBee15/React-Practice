import React from 'react'

function Memo({name}) {
    console.log("child")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Memo)