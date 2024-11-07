import React, { useState } from 'react';
import { TfiCup } from "react-icons/tfi";
import { FaTv, FaHome } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from '../Homefolder/navbar';

function Home1() {
  const [show, setShow] = useState('-350px');

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  };

  return (
    <div className="h-screen w-full bg-[url('/src/assets/book.jpg')] bg-cover  flex flex-col items-center justify-end">
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
              <Link to="/landing" className="p-3 text-center hover:bg-green-600">Login</Link>
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

      <div className="flex items-end justify-center w-full h-full px-4 md:px-0">
        <div className="w-full md:w-[90%] h-[80vh] grid grid-rows-[70%,30%] gap-4">
          <div className="grid mt-3 justify-items-center md:justify-items-start text-center md:text-left">
            <h1 className="text-[32px] md:text-[50px]">Education & Training</h1>
            <h1 className="text-[32px] md:text-[50px]">Organization</h1>
            <div className="font-medium text-[15px] md:text-[22px] mt-5 text-sky-500 bg-[] p-3 rounded-md w-[80%] md:w-[40%]">
              <p>We offer the most complete course package in the country, for the research, design, and development of Education.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="h-[50px] md:h-[60px] w-[140px] md:w-[160px] bg-blue-500 text-white uppercase hover:bg-blue-600 transition">Our Courses</button>
              <button className="h-[50px] md:h-[60px] w-[140px] md:w-[160px] bg-black text-white uppercase hover:bg-gray-800 transition">Contact Us</button>
            </div>
          </div>

          <div className="bg-blue-500 h-[150px] w-[100%] grid grid-cols-1 md:grid-cols-3 mt-7 mb-5">
            <div className="hover:bg-blue-700 transition text-black flex gap-5 items-center p-4">
              <TfiCup className="text-3xl md:text-5xl" />
              <div>
                <h1 className="text-[18px] md:text-[25px] font-bold">World's Best Instructors</h1>
                <h1 className="uppercase text-[12px] md:text-[15px]">View More</h1>
              </div>
            </div>
            <div className="hover:bg-blue-700 transition flex gap-6 items-center p-4">
              <FaTv className="text-3xl md:text-5xl" />
              <div>
                <h1 className="text-[18px] md:text-[25px] font-bold">Learn Courses Online</h1>
                <h1 className="uppercase text-[12px] md:text-[15px]">View More</h1>
              </div>
            </div>
            <div className="hover:bg-blue-700 transition flex gap-5 items-center p-4">
              <IoBookOutline className="text-3xl md:text-5xl" />
              <div>
                <h1 className="text-[18px] md:text-[25px] font-bold">Online Library & Store</h1>
                <h1 className="uppercase text-[12px] md:text-[15px]">View More</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home1;
