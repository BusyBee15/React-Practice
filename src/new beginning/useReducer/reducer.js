export const reducer = (state, action) => {
  
   if(action.type === "ADD_ITEM"){
     const newItems = [...state.people, action.payload]
     return {
       ...state,
       people: newItems,
       isModalOpen:true,
       modalContent:"Item added"
     }
   }
   if(action.type==="NO_VALUE"){
     return {
      ...state,
      isModalOpen:true,
      modalContent:"Please enter value"
     }
   }
   if(action.type==="CLOSE_MODAL"){
    return {
      ...state,
      isModalOpen:false
    }
   }
   if(action.type==="REMOVE_ITEM"){
    const newItems = state.people.filter((person)=>person.id!==action.payload)
    return {
       ...state,
       people: newItems,
       isModalOpen:true,
       modalContent:"Item removed"
     }
   }
  //  return state
   throw new Error('no matching action type')
}