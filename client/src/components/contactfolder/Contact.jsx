import React, { useState } from 'react'
import { FaTv, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from '../Homefolder/navbar';

function Contact() {
  const [show, setShow] = useState('-350px');

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  };
  return (
    <div className=" bg-blue-200">
      <div className="h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10">
    <div className="text-[24px] md:text-[30px] flex items-center font-bold">
      <span className="text-blue-500"><FaHome className="text-white" /></span>
      <h1 className="ml-2">STUDYLMS</h1>
    </div>
    <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
      <Link to="/" className="hover:text-blue-300">Home</Link>
      <Link to="/contact" className="hover:text-blue-300">Contact</Link>
      <Link to="/blog" className="hover:text-blue-300">Blog</Link>
      <div className="relative group">
        <Link className="hover:text-blue-300">Services</Link>
        <nav className="hidden group-hover:flex flex-col gap-2 absolute top-full right-0 bg-green-500 rounded-lg shadow-lg">
          <Link to="/login" className="p-3 text-center hover:bg-green-600">Login</Link>
          <Link to="/register" className="p-3 text-center hover:bg-green-600">Register</Link>
        </nav>
      </div>
    </nav>
    <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="text-xl focus:outline-none">
        ☰
      </button>
      <Navbar show={show} />
    </div>
  </div>
    <div className='h-[80vh] bg-[green] grid grid-rows-[20%,80%]'>
      <div className=" items-center justify-center grid">
       <h2 className='text-[30px] font-bold'>GET IN TOUCH</h2>
      </div>
       <div className=" justify-center flex">
           <div className="bg-[orange] h-[60vh] w-[70%] grid grid-rows-[20%,30%,50%]"></div>
       </div>

    </div>
    </div>
  )
}

export default Contact