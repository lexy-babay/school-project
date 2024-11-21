import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Homefolder/navbar';
import { FaTv, FaHome } from "react-icons/fa";

function About2() {

    const [show, setShow] = useState('-350px');

  const toggleMenu = () => {
    setShow(show === '-350px' ? '0' : '-350px');
  }

  return (
 <div className="bg-[url('/src/assets/school.jpg')] bg-cover bg-center bg-no-repeat h-[90vh]">
            <div className=" bg-transparent h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10">
    <div className="text-[24px] md:text-[30px] flex items-center font-bold">
      <span className="text-blue-300"><FaHome className="text-white" /></span>
      <h1 className="ml-2 uppercase">olams</h1>
    </div>
    <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
      <Link to="/" className="hover:text-blue-300">Home</Link>
      <Link to="/contact" className="hover:text-blue-300">Contact</Link>
      <Link to="/about" className="hover:text-blue-300">About</Link>
      <div className="relative group">
        <Link className="hover:text-blue-300">Get Started</Link>
        <nav className="hidden group-hover:flex flex-col gap-2 absolute top-full right-0 bg-slate-200 rounded-lg shadow-lg">
          <Link to="/landing" className="p-3 text-center hover:bg-blue-500">Login</Link>
          <Link to="/register" className="p-3 text-center hover:bg-blue-500">Register</Link>
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
    <div className="grid p-14 ">
     <div className="bg-black  rounded-[20px] items-center justify-center grid mt-14 w-[55%] h-[250px]">
     <div className="items-center justify-center grid p-5">
     <h2 className='uppercase text-white text-[50px]'>About us</h2>
       <p className='font-thin text-white text-[20px]'> OLAMS plays a critical role in modernizing and improving the operations of educational institutions.</p>
        <p className='font-thin text-white text-[20px]'> By automating administrative tasks, providing real-time data, and improving communication, </p>
         {/* SMS can help create a more organized and efficient school environment. The right system can make a significant impact on student performance, school management, and overall educational quality, while also saving time and resources for both staff and students.
 */}
     </div>
     </div>
    </div>
  
      </div>
  )
}

export default About2