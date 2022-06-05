import React, {useState, useEffect} from 'react'
import MimicCompDidMount from './MimicCompDidMount'
//container component
function MimicCompWillUnmount() {
    const [display, setDisplay]=useState(true)

     return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {display && <MimicCompDidMount/>}
    </div>
  )
}

export default MimicCompWillUnmount