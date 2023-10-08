import React from 'react'
import Header from './home/Header'
import Main from './home/main'

const Home = () => {
  return (
    <div>
        <Header />
        <div className='flex items-center justify-center'>
            <Main />
        </div>
        
    </div>
  )
}

export default Home