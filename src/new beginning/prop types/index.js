import React from 'react'
import useFetch from "../custom hooks/useFetch"
import Product from './Product'
const url = "https://course-api.com/react-prop-types-example"

const Index = () => {
  const {users} = useFetch(url)
  console.log(users)
  return (
    <>
    <h2>products</h2>
    <section className='products'>
        {
            users.map((product)=>{
                return <Product key={product.id} {...product} />
            })
        }
    </section>
    </>
  )
}

export default Index