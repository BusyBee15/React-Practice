import React from 'react'

function Person({person}) { //if curly braces not given it will be treated as
    // tho it is a prop,
    console.log(person)
  return (
    <div>
       <h2>I am {person.name}, I'm {person.age} years old</h2>
    </div>
   
  )
}

export default Person