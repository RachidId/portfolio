import React from 'react'
import SideBar from './dashboard/SideBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex w-screen h-screen'>
        <div className='w-[20%]'>
            <SideBar />
        </div>

        <div className='w-[80%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home