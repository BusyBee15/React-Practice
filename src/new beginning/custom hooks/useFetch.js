import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
      const response = await fetch(url)
      const  data    = await response.json()
    setUsers(data)
  }
  useEffect(()=>{
       getUsers()
  },[url])
  return {users}
}

export default useFetch