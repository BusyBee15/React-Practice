import React, { useEffect, useState } from 'react'
const url = "https://api.github.com/users/QuincyLarson"
const MultipleReturns = () => {
    const [isloading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')
 
 
    useEffect(()=>{
        fetch(url)
           .then((resp)=>{
            if(resp.status >=200 && resp.status <=299){
                return resp.json()
            }else{
                setIsLoading(false)
                setIsError(true)
                throw new Error(resp.statusText)
            }
           })
           .then((user)=>{
             const {login} = user
             setUser(login)
             setIsLoading(false)
           })
           .catch((error)=> console.log(error)) 
    },[])

    if(isloading){
        return <h2>Loading..</h2>
    }
    if(isError){
        return <>
        <h2>Error...</h2>
        </>
    }
    return <>
    <h2>{user}</h2>
    </>
    
    return <h2>Multiple returns</h2>
  
}

export default MultipleReturns