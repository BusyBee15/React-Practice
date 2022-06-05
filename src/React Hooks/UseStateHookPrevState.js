import React, { useState } from 'react'

function UseStateHookPrevState() {
    const [count, setCount]=useState(0)
    const incrFive = () =>{
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        <button onClick={()=>setCount(prevCount => prevCount+1)}>
            Increment {count}
        </button>
        <button onClick={()=>setCount(prevCount => prevCount-1)}>
            Decrement {count}
        </button>
        <button onClick={()=>setCount(0)}>
            Reset {count}
        </button>
        <button onClick={incrFive}>
        Increment Five {count}
        </button>
    </div>
  )
}

export default UseStateHookPrevState