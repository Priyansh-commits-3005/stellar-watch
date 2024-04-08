import React from 'react'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full bg-black flex items-center justify-center'>
        <h1 className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>
          Explore the Universe with Stellar Watch
        </h1>
      </div>
      <div className='h-screen w-full bg-black pt-5 font-extrabold '>
        <h1 className='flex justify-center tracking-wider text-white'>FEATURES</h1>
        <h1 className='flex justify-center text-blue-700 text-3xl font-bold '>EXPLORE STELLAR WATCH FEATURES</h1>
        <div className=' grid grid-cols-2 m-10 gap-2 text-wrap '>
          <div className=" bg-purple-500/20 pb-12 mx-3 my-2"><h1 className='text-blue-900  border border-transparent m-3   p-1'>Near Earth Object Identification</h1><p className='text-white m-3 p-1'>Track and identify near earth objects in real-time</p></div>
          <div className=" bg-purple-500/20 pb-12 mx-3 my-2"><h1 className='text-blue-900  border border-transparent m-3   p-1'>Space Event News</h1><p className='text-white m-3 p-1'>Stay updated with the latest space events news and future events</p></div>
          <div className=" bg-purple-500/20 pb-12 mx-3 my-2"><h1 className='text-blue-900  border border-transparent m-3   p-1'>tbd</h1><p className='text-white m-3 p-1'></p></div>
          <div className=" bg-purple-500/20 pb-12 mx-3 my-2"><h1 className='text-blue-900  border border-transparent m-3   p-1'>Educational Resources</h1><p className='text-white m-3 p-1'>Access educational material to learn more about space and astronomy</p></div>
        </div>
      </div>
    </>
  )
}

export default Landing