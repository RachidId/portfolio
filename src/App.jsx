import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignIn from './components/signin/SignIn.jsx'
import './App.css'
import SideBar from './components/shopperDashboard/SideBar.jsx'
import Shopper from './components/Shopper.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/shopperDashboard/Product'
import Dashboard from './components/shopperDashboard/Dashboard'
import Orders from './components/shopperDashboard/Orders'
import Customers from './components/shopperDashboard/Customers'
import CusChat from './components/shopperDashboard/CusChat'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>

        <Route path="/shopper" element={<Shopper />}>
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
