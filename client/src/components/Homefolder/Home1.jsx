import React, { useState } from 'react';
import { TfiCup } from "react-icons/tfi";
import { FaTv, FaHome } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from '../Homefolder/navbar'

function Home1() {

  var [show,setshow]=useState('-350px')

  function clickme() {
    if (show=='-350px') {
      setshow('0')
    } else {
      setshow('-350px')
    }
    
  }
  return (
    <div className="h-screen w-full bg-[url('/src/assets/book.jpg')] bg-cover bg-center flex flex-col items-center justify-end">
<div className='h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10 '>
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
            <nav className='child flex-col gap-2 absolute top-full right-0 bg-green-500 rounded-lg shadow-lg'>
              <Link to='/login'>
                <div className='p-3 text-center hover:bg-green-600'>Login</div>
              </Link>
              <Link to='/register'>
                <div className='p-3 text-center hover:bg-green-600'>Register</div>
              </Link>
            </nav>
          </div>
        </nav>

        {/* Responsive Menu Icon for Mobile */}
        <div className='md:hidden flex items-center relative'>
          <button onClick={clickme} className='text-xl focus:outline-none'>
            {/* Replace with an icon, such as a hamburger icon for a mobile menu */}
            ☰
          </button>
    <Navbar  show={show}/>
        </div>
      </div> 

      <div className="flex items-end justify-center w-full h-full px-4 md:px-0">
        <div className="w-full md:w-[90%] h-[80vh] grid grid-rows-[70%,30%] gap-4">
          <div className="grid justify-items-center md:justify-items-start text-center md:text-left">
            <h1 className='text-[32px] md:text-[50px]'>Education & Training</h1>
            <h1 className='text-[32px] md:text-[50px]'>Organization</h1>
            <div className="font-medium text-[18px] md:text-[22px] mt-3 text-sky-500">
              <p>We offer the most complete course package in the country, for the</p>
              <p>research, design, and development of Education.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button className='h-[50px] md:h-[60px] w-[140px] md:w-[160px] bg-blue-500 uppercase hover:bg-blue-600 transition'>Our Courses</button>
              <button className='h-[50px] md:h-[60px] w-[140px] md:w-[160px] bg-black text-white uppercase hover:bg-slate-950 transition'>Contact Us</button>
            </div>
          </div>

          <div className="bg-blue-500 grid grid-cols-1 md:grid-cols-3">
            <div className="hover:bg-blue-700 transition text-black flex gap-5 items-center p-4">
              <TfiCup className='text-3xl md:text-5xl' />
              <div>
                <h1 className='text-[18px] md:text-[25px] font-bold'>World's Best Instructors</h1>
                <h1 className='uppercase text-[12px] md:text-[15px]'>View More</h1>
              </div>
            </div>
            <div className="hover:bg-blue-700 transition flex gap-6 items-center p-4">
              <FaTv className='text-3xl md:text-5xl' />
              <div>
                <h1 className='text-[18px] md:text-[25px] font-bold'>Learn Courses Online</h1>
                <h1 className='uppercase text-[12px] md:text-[15px]'>View More</h1>
              </div>
            </div>
            <div className="hover:bg-blue-700 transition flex gap-5 items-center p-4">
              <IoBookOutline className='text-3xl md:text-5xl' />
              <div>
                <h1 className='text-[18px] md:text-[25px] font-bold'>Online Library & Store</h1>
                <h1 className='uppercase text-[12px] md:text-[15px]'>View More</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
