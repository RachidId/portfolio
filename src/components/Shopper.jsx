import React, { useEffect } from 'react'
import SideBar from './shopperDashboard/SideBar'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Outlet } from 'react-router-dom'

const Shopper = () => {
  const addingProd = useSelector((state) => state.functions.addingProd);
  useEffect(()=>{
    console.log(addingProd)
  }, [])
  const dispatch = useDispatch();
  return (
    <div className={`flex w-screen h-screen`}>
        <div className={`${addingProd ? '-z-10 opacity-20': 'z-10'} w-[20%]`}>
            <SideBar />
        </div>

        <div className={`w-[80%]`}>
            <Outlet />
        </div>
    </div>
  )
}

export default Shopper