import React from 'react'
import pattern from '../../assets/pattern.png'
import lap from '../../assets/lap.png'
import logo from '../../assets/logo.png'

const Main = () => {
  const l = [1, 2, 3, 4, 5, 6, 7, 8]
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

        <div className='grid grid-cols-6 w-[90%] mx-auto'>
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

        <div className='grid grid-cols-4 mx-auto w-[90%] gap-y-9'>
          {
            l.map(()=>{
              return (

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-[17em] dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" >
                        <img class="rounded-t-lg h-[12em]" src={logo} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add to cart
                             
                        </a>
                    </div>
                </div>

              )
              })
          }
        </div>

        <h1 className='ms-20 my-5'>Choosing by shops</h1>

        <div className='grid grid-cols-4 mx-auto w-[90%] gap-y-9'>
        {
            l.map(()=>{
              return (

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-xl hover:shadow-2xl w-[17em] p-5 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-5" className='h-full p-5 flex items-center justify-evenly h-fit'>
                        <img class="rounded-t-lg w-[3em] h-[3em] bg-main rounded-[50%]" src={logo} alt="" />
                        <div>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Shop Name</p>
                          <p>24 products</p>
                        </div>
                    </div>
                </div>

              )
              })
          }
        </div>
    </div>
  )
}

export default Main