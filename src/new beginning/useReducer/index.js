import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import {reducer} from "./reducer"


const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:''
}
const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
       const newItem = {id:new Date().getTime().toString(), name}
       dispatch({type:'ADD_ITEM', payload:newItem})
       setName('')
    }else{
        dispatch({type:"NO_VALUE"})
    }
    
  }

  const closeModal = () =>{
    dispatch({type: "CLOSE_MODAL"})
  }

  return (
   <>
   {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
   <form className='form' onSubmit={handleSubmit}>
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>    
    </div>
    <button type='submit' className='btn'>Add person</button>
   </form>
   {
    state.people.map((person)=>{
        return(
            <div key={person.id} className="item">
             <h2>{person.name}</h2>
             <button className='btn' onClick={()=>dispatch({type:"REMOVE_ITEM", payload:person.id})}>remove</button>
            </div>
        )
    })
   }
   </>
  )
}

export default Index