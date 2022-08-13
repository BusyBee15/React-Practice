import React, { useEffect, useState } from 'react'
const url = "https://api.github.com/users"
//fetching the data
const Example4 = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const newData = await response.json()
    // console.log(newData)
    setUsers(newData)
  }
  useEffect(()=>{
    getUsers()
  }, [])

  return (
   <>
   <h3>Github users</h3>
   <ul className='users'>
    <h3>{ console.log(users)}</h3>
   {
   
    users.map((user)=>{
          const {id, login, avatar_url, html_url} = user 
          return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
            </div>
          </li>
    })
   }
   </ul>
   
   </>
  )
}

export default Example4