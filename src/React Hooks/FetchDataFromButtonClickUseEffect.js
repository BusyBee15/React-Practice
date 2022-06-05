import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchDataFromButtonClickUseEffect() {
    const [post, setPost]=useState({})
    const [id, setId] = useState(1)
    const [buttonid, setbuttonId]=useState(1)

    const clickHandler=()=>{
        setbuttonId(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [buttonid])
  return (
    <div>
        <input type = "text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={clickHandler}>Fetch Post</button>
        <h2>{post.title}</h2>
    </div>
  )
}

export default FetchDataFromButtonClickUseEffect