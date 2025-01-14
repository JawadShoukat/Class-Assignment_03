"use client";
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex shrink-0'>
              <a href='/' className='text-white'>
              <h1 className='font-serif text-yellow-400 text-5xl'>GIAIC</h1>
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <a href='/' className='text-white hover:bg-sky-500 hover:text-black rounded-lg p-2'>

              Home
              </a>
              <a href='/' className='text-white hover:bg-sky-500 hover:text-black rounded-lg p-2'>
              
              Hero
              </a>
              <a href='/' className='text-white hover:bg-sky-500 hover:text-black rounded-lg p-2'>
              
              AbourUS
              </a>
              <a href='/' className='text-white hover:bg-sky-500 hover:text-black rounded-lg p-2'>
              
              Projects
              </a>
              <a href='/' className='text-white hover:bg-sky-500 hover:text-black rounded-lg p-2'>
              
              Contant
              </a>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button
            className='inline-flex items-center justify-center p-2 rounded-md text-white
            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
    
            >
  
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )

  
};

export default Navbar