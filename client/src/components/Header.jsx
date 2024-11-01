import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Header() {
  var [disp,setDisp] = useState('none')

  window.onscroll = ()=>{
    if(window.scrollY>300) {
      setDisp('block')
    }else {
      setDisp('none')
    }
  }

  return (
    <div className=''  style={{ display: disp }}>
      <div className='h-[80px] w-full bg-blue-500 text-white flex justify-between items-center px-6 md:px-10 fixed top-0 z-10'>
        <div className="text-[24px] md:text-[30px] flex items-center font-bold">
          <span className='text-blue-500'><FaHome className='text-white' /></span>
          <h1 className='ml-2'>STUDYLMS</h1>
        </div>

        <nav className='hidden md:flex gap-[30px] lg:gap-[70px] relative'>
          <Link to='/' className='hover:text-blue-300'>Home</Link>
          <Link to='/contact' className='hover:text-blue-300'>Contact</Link>
          <Link to='/blog' className='hover:text-blue-300'>Blog</Link>
          
          <div className='relative '>
            <Link className=' hover:text-blue-300'>Services</Link>
            {/* Dropdown Menu */}
            {/* <nav className='child flex-col gap-2 absolute top-full right-0 bg-green-500 rounded-lg shadow-lg'>
              <Link to='/login'>
                <div className='p-3 text-center hover:bg-green-600'>Login</div>
              </Link>
              <Link to='/register'>
                <div className='p-3 text-center hover:bg-green-600'>Register</div>
              </Link>
            </nav> */}
          </div>
        </nav>

        {/* Responsive Menu Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button className='text-xl focus:outline-none'>
            {/* Replace with an icon, such as a hamburger icon for a mobile menu */}
            ☰
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
