//adding person details the people list

import React, { useState } from 'react'

const MultipleInputs = () => {
  const [person, setPerson] = useState({firstName:'', email:'', age:''})
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(person.firstName && person.email && person.age){
        const newPerson = {...person, id: new Date().getTime().toString()}
        setPeople([...people, newPerson])
        setPerson({firstName:'', email:'', age:''})
    }
   
  }

  const handleChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setPerson({...person, [key]:value})
  }

  return (
    <article>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input 
               type="text" 
               id='firstName' 
               name='firstName' 
               value={person.firstName}
               onChange={handleChange}
               />
        </div>
        <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input 
               type="text" 
               id='email' 
               name='email' 
               value={person.email}
               onChange={handleChange}/>
        </div>
        <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input 
               type="text" 
               id='age' 
               name='age' 
               value={person.age}
               onChange={handleChange}/>
        </div>
        <button type='submit'>add person</button>
    </form>
    {
        people.map((person)=>{
            const {id,firstName,email, age} = person
            return <div className="item" key={id}>
                <h4>{firstName}</h4>
                <h4>{age}</h4>
                <p>{email}</p>
                  
            </div>
        })
    }
   </article>
  )
}

export default MultipleInputs