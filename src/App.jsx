import React from 'react'
import Collection from "./pages/Collection";
import Homepage from "./pages/Homepage";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection' element={<Collection />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App