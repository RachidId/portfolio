import React from 'react'
import {FaHome, FaNewspaper, FaUser, FaRocketchat, FaRegNewspaper} from 'react-icons/fa'
import {BiLogIn} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
const SideBar = () => {
  return (
    <div className=' w-full h-full'>
        <div className='bg-gray h-[65%]'>
            <img src={logo} alt="logo" className='w-[70%] mx-auto p-5'/>
            <ul>
                <li className='ps-6  hover:bg-gray-secondary'><Link to='dashboard' className='flex items-center justify-start p-6 '><FaHome className='me-3'/>  <span>Dashboard</span></Link></li>
                <li className='ps-6  hover:bg-gray-secondary'><Link to='product'className='flex items-center justify-start p-6 '><FaNewspaper className='me-3'/>  Product</Link></li>
                <li className='ps-6  hover:bg-gray-secondary'><Link to='orders'className='flex items-center justify-start p-6 '><FaRegNewspaper className='me-3'/>  Orders</Link></li>
                <li className='ps-6  hover:bg-gray-secondary'><Link to='customers'className='flex items-center justify-start p-6 '><FaUser className='me-3'/>  Customers</Link></li>
                <li className='ps-6  hover:bg-gray-secondary'><Link to='chat'className='flex items-center justify-start p-6 '><FaRocketchat className='me-3'/>  CusChat</Link></li>
            </ul>
        </div>

        <div className='bg-gray-secondary h-[35%]'>
            <p className='font-semibold text-[10px] opacity: 0.5 px-9 py-6'>PROFILE</p>
            <div className='flex justify-start items-center mx-auto w-[70%] mb-5'>
                <img src="" alt="" className='rounded-[50%] w-[60px] h-[60px] bg-main'/>
                <div className='ms-3'>
                    <p>Amishka</p>
                    <p className='text-main text-sm'>Shopper</p>
                </div>
            </div>
            <button className='flex items-center justify-evenly w-[70%] bg-[#fff] mx-auto py-4 text-[21px] rounded-md'><BiLogIn /> LOG OUT</button>
        </div>
    </div>
  )
}

export default SideBar