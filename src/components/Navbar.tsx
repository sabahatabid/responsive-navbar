"use client";

import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='bg-blue-600 text-white h-12 py-2 px-3 flex justify-between items-center'>
        <div>
            <h1 className='text-2xl font-semibold'>
                <a href='#!'>Syeda Sabahat</a>
            </h1>
        </div>
        <div>
            <ul className='flex space-x-5 '>
                <li><a href='/' className='hover:text-red-600'>Home</a></li>
                <li><a href='/aboutus' className='hover:text-red-600'>About-us</a></li>
                <li><a href='/contactus' className='hover:text-red-600' >Contact-us</a></li>
            </ul>
        </div>
        <div>
            <ul className='flex space-x-3 '>
                <li><a href='#!' className='hover:text-red-600'>Login</a></li>
                <li><a href='#!' className='hover:text-red-600'>Sign-up</a></li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar