import React from 'react'

function IndexAsKeys() {
    const arr = ['Anu', 'Chitra', 'Anu']
    const arrlist = arr.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>{arrlist}</div>
  )
}

export default IndexAsKeys