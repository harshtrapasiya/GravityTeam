import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home'
import Aboutus from './Aboutus'
import Ourservices from './Ourservices'
import Workwithus from './Workwithus'
import Blog from './Blog'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<Aboutus />} />
      <Route path='/Ourservices' element={<Ourservices />} />
      <Route path='/workwithus' element={<Workwithus />} />
      <Route path='/Blog' element={<Blog />} />
    </Routes>
  </BrowserRouter>


);


reportWebVitals();
