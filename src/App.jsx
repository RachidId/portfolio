import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignIn from './components/signin/SignIn.jsx'
import './App.css'
import SideBar from './components/dashboard/SideBar.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/dashboard/Product'
import Dashboard from './components/dashboard/Dashboard'
import Orders from './components/dashboard/Orders'
import Customers from './components/dashboard/Customers'
import CusChat from './components/dashboard/CusChat'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>

        <Route path="/home" element={<Home />}>
          <Route
            path="product"
            element={<Product />}
          />
          <Route
            path="dashboard"
            element={<Dashboard />}
          />
          <Route
            path="orders"
            element={<Orders />}
          />
          <Route
            path="customers"
            element={<Customers />}
          />
          <Route
            path="chat"
            element={<CusChat />}
          />
        </Route>    
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
