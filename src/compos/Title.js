import React, { useContext } from 'react'
import { usercontext } from '../App'
import {  Link} from 'react-router-dom';

const Title = () => {
  const {blog}=useContext(usercontext)
  console.log(blog);
  return (
   
    <div>
      <h1>Title</h1>
   {
    blog.map((item)=>(
      <div >

       <Link to={`/contents/${item.Id}`}><h3  >{item.title}</h3></Link>
      </div>
    ))
   }
    </div>
  )
}

export default Title