import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home'
import Aboutus from './Aboutus'
import Ourservices from './Ourservices'
import Workwithus from './Workwithus'
import Blog from './Blog'
import Getintouch from './Getintouch'
import Loaders from './loaders';
import Navbar from './Navbar';

import React, { useEffect, useState } from 'react'

function App() {
  const [loaders, setLoader] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false)
  //   }, 3000)
  // })
  return (

    loaders ? <Loaders /> :
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/Ourservices' element={<Ourservices />} />
          <Route path='/workwithus' element={<Workwithus />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/getintouch' element={<Getintouch />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App



