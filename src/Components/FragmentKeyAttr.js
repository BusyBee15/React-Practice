import React from 'react'

function FragmentKeyAttr() {
    const list = ['Anu','Chitra','Abc']
    const arrlist = list.map(name=><React.Fragment key={name}>
        <h1>{name}</h1>
        <h2>{name}</h2>
    </React.Fragment>)
  return (
    <div>
       {arrlist}
    </div>
  )
}

export default FragmentKeyAttr