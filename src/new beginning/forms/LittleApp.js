//adding person details the people list

import React, { useState } from 'react'

const LittleApp = () => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(firstName, email)
    if(firstName && email){
        console.log("submit the form")
        const person = {id:new Date().getTime().toString()   ,firstName, email}
        setPeople([...people, person])
        setFirstName("")
        setEmail("")
    }else{
        console.log("empty values")
    }
  }

  const removeItems = (id) => {
    const newList = people.filter((person)=>person.id!==id)
    setPeople(newList)
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
               value={firstName}
               onChange={(e)=>setFirstName(e.target.value)}
               />
        </div>
        <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input 
               type="text" 
               id='email' 
               name='email' 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type='submit'>add person</button>
    </form>
    {
        people.map((person)=>{
            const {id,firstName,email} = person
            return <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
                <button className="btn" onClick={()=>removeItems(id)}>remove</button>   
            </div>
        })
    }
   </article>
  )
}

export default LittleApp