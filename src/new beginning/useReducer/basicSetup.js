import React, { useState } from 'react'
import Modal from './Modal'

const Index = () => {
  const [people, setPeople] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
       const person = {id: new Date().getTime().toString(), name}
       setPeople([...people, person])
       setShowModal(true)
       
    }else{
      setShowModal(true)
    }
    // console.log(people)

  }
  return (
   <>
   {showModal && <Modal/>}
   <form className='form' onSubmit={handleSubmit}>
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>    
    </div>
    <button type='submit' className='btn'>Add person</button>
   </form>
   {
    people.map((person)=>{
        return(
            <div key={person.id}>
             <h2>{person.name}</h2>
            </div>
        )
    })
   }
   </>
  )
}

export default Index