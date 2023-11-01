import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { usercontext } from '../App'

const Home = () => {
  const{blog,setBlog}=useContext(usercontext)
  const titleref=useRef(null)
  const contantref=useRef(null)
  const btn=()=>{
    const newtitleref=titleref.current.value;
    const newcontantref=contantref.current.value;
    const value={title:newtitleref,contant:newcontantref,Id:Date.now()}
 
    setBlog([...blog,value])
  }
  return (
    <div>
        <h1 className='headding'>Create Blog</h1><hr/>
       <textarea ref={titleref} placeholder='Enter Your Title.....' rows={3} cols={50} /><br/>
       <textarea ref={contantref} placeholder='Enter Your Content...' rows={20} cols={50} /><br/><br/>
       <Link to={"/Title"}> 
       <button className='btn' onClick={btn}>SAVE</button>
       </Link>
     
    </div>
  )
}

export default Home