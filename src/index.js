import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>


);


reportWebVitals();
