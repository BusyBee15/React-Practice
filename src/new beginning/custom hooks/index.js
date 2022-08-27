import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
const url = "https://api.github.com/users"

const Index = () => {
  const {users} = useFetch(url)
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

export default Index