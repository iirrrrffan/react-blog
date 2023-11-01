import logo from './logo.svg';
import './App.css';
import Home from './compos/Home';
import { Route, Routes } from 'react-router-dom';
import Title from './compos/Title';
import { createContext, useState } from 'react';
import Wrong from './compos/Wrong';
import Contants from './compos/Contants';

export const usercontext=createContext()

function App() {
  const[blog,setBlog]=useState([])
  return (
    <div className="App">
      <usercontext.Provider value={{blog,setBlog}}>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/title' element={<Title/>} />
    <Route path='/contents/:id' element={<Contants />} />
    <Route path='/*' element={<Wrong />}/>
    
   </Routes>
   </usercontext.Provider>
    </div>
  );
}

export default App;
