import React from 'react'
import pattern from '../../assets/pattern.png'
import lap from '../../assets/lap 1.png'

const Main = () => {
  return (
    <div className='w-screen'>
        <div className={`rounded-md w-[90%] h-[400px] image rounded-xl mx-auto flex items-center`}>
          <div className='flex justity-center items-start  px-6 ms-7 flex-col w-[60%]'>
              <h1 className='text-[30px]'>Find the best product <br></br>with<span className='text-main ms-1'>Reliability</span></h1>
               <div className='flex items-center justify-evenly'>
                  <input type="text" placeholder='Search Here Shop or Product' className='border py-2 px-3 rounded-lg me-3'/>
                  <button className='rounded-md bg-main py-2 px-1'>search</button>
               </div>
          </div>
        </div>

        <h1 className='ms-20 my-5'>Shop Our Top Categories</h1>

        <div className='grid grid-cols-6 w-[80%] mx-auto'>
          <div className='text-center w-[11em] bg-[yellow] h-[250px] rounded-xl'>
            <p className='pt-4'>Tech</p>
            <img src={lap} classame="" alt="lap" />
          </div>
          <div className='text-center w-[11em] bg-[yellow] h-[250px] rounded-xl'>
            <p className='pt-4'>Tech</p>
            <img src={lap} classame="w-[100%] " alt="lap" />
          </div>
          <div className='text-center w-[11em] bg-[yellow] h-[250px] rounded-xl'>
            <p className='pt-4'>Tech</p>
            <img src={lap} classame="w-[100%] " alt="lap" />
          </div>
          <div className='text-center w-[11em] bg-[yellow] h-[250px] rounded-xl'>
            <p className='pt-4'>Tech</p>
            <img src={lap} classame="w-[100%] " alt="lap" />
          </div>
          <div className='text-center w-[11em] bg-[yellow] h-[250px] rounded-xl'>
            <p className='pt-4'>Tech</p>
            <img src={lap} classame="w-[100%] " alt="lap" />
          </div>
          <div className='text-center w-[11em] bg-[yellow] h-[250px] rounded-xl'>
            <p className='pt-4'>Tech</p>
            <img src={lap} className="w-[100%] " alt="lap" />
          </div>
        </div>

        <h1 className='ms-20 my-5'>Best Deals For You !</h1>

        <div>
          
        </div>
    </div>
  )
}

export default Main