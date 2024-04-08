import React from 'react'

const Navbar = () => {
  return (
    

<nav className="bg-black border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4">
    {/* this has to be put in react router */}
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Stellar</span>
    </a>

    <div className="hidden w-full md:block md:w-auto">
      <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white'>
        <li className='  hover:border-b-1 hover:border-white'>
            <p className='hover:animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent'>Home</p>
        </li>
        <li>
        <p className='hover:animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent'>Features</p>
        </li>
        <li>
        <p className='hover:animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent'>Blog</p>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar