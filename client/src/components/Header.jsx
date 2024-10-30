import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className='h-[80px] w-full bg-black text-white flex justify-between items-center px-6 md:px-10 fixed top-0 z-10'>
      {/* Logo */}
      <div className="text-[24px] md:text-[30px] flex items-center font-bold">
        <span className='text-yellow-500'><FaHome /></span>
        <h1 className='ml-2'>STUDYLMS</h1>
      </div>

      {/* Desktop Navigation Links */}
      <nav className='hidden md:flex gap-[30px] lg:gap-[70px]'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/blog'>Blog</Link>
        <div className='relative group'>
          <Link className='cursor-pointer'>Services</Link>
          <nav className='hidden group-hover:flex flex-col gap-2 absolute top-[100%] right-0 bg-green-500 rounded-lg overflow-hidden shadow-lg'>
            <Link to='/login'><div className='p-3 text-center hover:bg-green-600'>Login</div></Link>
            <Link to='/register'><div className='p-3 text-center hover:bg-green-600'>Register</div></Link>
          </nav>
        </div>
      </nav>

      {/* Mobile Menu Icon with Dropdown */}
      <div className='md:hidden relative group'>
        <button className='text-xl focus:outline-none'>
          <FaBars />
        </button>
        <nav className='hidden group-hover:flex flex-col absolute top-[100%] right-0 bg-gray-800 w-[150px] rounded-lg shadow-lg'>
          <Link to='/' className='p-3 text-center hover:bg-gray-700'>Home</Link>
          <Link to='/contact' className='p-3 text-center hover:bg-gray-700'>Contact</Link>
          <Link to='/blog' className='p-3 text-center hover:bg-gray-700'>Blog</Link>
          <div className='relative group'>
            <Link className='p-3 text-center hover:bg-gray-700'>Services</Link>
            <nav className='hidden group-hover:flex flex-col bg-green-500 rounded-lg shadow-lg mt-1'>
              <Link to='/login'><div className='p-3 text-center hover:bg-green-600'>Login</div></Link>
              <Link to='/register'><div className='p-3 text-center hover:bg-green-600'>Register</div></Link>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
