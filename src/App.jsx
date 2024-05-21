import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './user/pages/Home'
import Login from './user/pages/Login'
import About from './user/pages/About'
import Breadcrumb from './components/Breadcrumb'
import Register from './user/pages/Register'
import Cart from './user/pages/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Shoes from './user/pages/Shoes'
import ShoesDetails from './user/pages/ShoesDetails'
import Checkout from './user/pages/Checkout'
import Contact from './user/pages/Contact'
import { useUserStore } from './store/user'

function App() {
  let isloggedin = useUserStore((state) => state.isloggedin)
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/shoes/:id" element={<ShoesDetails />} />
      <Route path="/cart" element={isloggedin ? <Cart /> : <Navigate to="/login"/>} />
      <Route path="/checkout" element={isloggedin ? <Checkout /> : <Navigate to="/login"/> } />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <ToastContainer />
    

   


    </>
  )
}

export default App
