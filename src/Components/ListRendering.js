import React from 'react'
import Person from './Person'

function ListRendering() {
    const persons = [
        {
            id:1,
            name:'Anu',
            age:21
        },
        {
            id:2,
            name:'Chitra',
            age:21
        }
    ]
    const personList= persons.map(person=><Person key={person.id} person={person}/>)
    return <div>{personList}</div> 
}
//3rd method - list rendering logic in separate component
export default ListRendering