import React, {useEffect, useState} from 'react'

function UseEffectAfterRender() {
    const [count, setCount]=useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log("useEffect")
        document.title=`You clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type="text" onChange={e=>setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectAfterRender