import React from 'react'

const Navbar = () => {
  return (
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    {/* this has to be put in react router */}
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Stellar</span>
    </a>

    <div class="hidden w-full md:block md:w-auto">
      <ul>
        <li>
            Home
        </li>
        <li>
            Features
        </li>
        <li>
            Blog
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar