import React from 'react'
import {data} from "../Data/data"

//useState with array
const Example2 = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
     const newResult = people.filter((person)=>person.id!=id)
     setPeople(newResult)
  }
  return (
    <>
    {
        people.map((person) => {
            const {id, name} = person
            return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button className='remove-btn' onClick={()=>removeItem(id)}>remove</button>
            </div>
            )
        })
    } 
    <button className='btn' onClick={()=>setPeople([])}>Delete all</button>
    </>  
  )
}

export default Example2