import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { usercontext } from '../App'

const Contants = () => {
    const{id}=useParams()
    const {blog}=useContext(usercontext)
const find=blog.find((item)=>item.Id===parseInt(id))
  return (
    <div>
        <h1>{find.title}</h1>
        <p>{find.contant}</p>
    </div>
  )
}

export default Contants