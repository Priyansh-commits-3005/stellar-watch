import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-0">
      <div className="w-screen flex flex-wrap items-center justify-between  p-4 ">
        {/* this has to be put in react router */}
        <a href="#" className="">
          <span className="self-center text-2xl font-semibold  text-white ml-10">Stellar</span>
        </a>

        <div className="hidden w-full md:block md:w-auto  mr-16">
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white'>
            <li>
              <p className='hover:underline hover:underline-offset-8'>Home</p>
            </li>
            <li>
              <p className='hover:underline hover:underline-offset-8'>Features</p>
            </li>
            <li>
              <p className='hover:underline hover:underline-offset-8'>Blog</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar