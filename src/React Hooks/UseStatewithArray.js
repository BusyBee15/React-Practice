import React, {useState} from 'react'

function UseStatewithArray() {
    const [items, setItems] = useState([])
const addNum = () =>{
        setItems([...items, {
            id:items.length,
            value:items.length+1
        }])
    }
  return (
    <div>
        <button onClick={addNum}>Add next number</button>
        <ul>
            {
                items.map(item => <li key={item.id}> {item.value} </li>)
            }
        </ul>
    </div>
  )
}

export default UseStatewithArray