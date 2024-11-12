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
    <div className=" bg-blue-500">
      <div className="h-[80px] w-full text-white flex justify-between items-center px-6 md:px-10">
    <div className="text-[24px] md:text-[30px] flex items-center font-bold">
      <span className="text-blue-300"><FaHome className="text-white" /></span>
      <h1 className="ml-2">STUDYLMS</h1>
    </div>
    <nav className="hidden md:flex gap-[30px] lg:gap-[70px]">
      <Link to="/" className="hover:text-blue-300">Home</Link>
      <Link to="/contact" className="hover:text-blue-300">Contact</Link>
      <Link to="/blog" className="hover:text-blue-300">About</Link>
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
  <div className="bg-blue-500 h-[87vh] text-white grid items-center justify-center">
    <div className="text-center">
    <h2 className='text-white text-[50px] font-bold'>CONTACT <span className='text-blue-700'>US</span></h2>
    <p className='font-san'>Looking for expert help? Contact us today for personalized solutions tailored to your needs.</p>
    <p>We're here to make things easier for you!</p>
    </div>
  </div>
    
    <div class="custom-shape-divider-bottom-1731021532">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
       
  <div className='h-auto bg-white grid grid-rows-[20%,80%] md:h-[110vh]'>
  <div className="flex items-center justify-center">
    <h2 className='text-[24px] md:text-[30px] font-bold'>GET IN TOUCH</h2>
  </div>

  <div className="flex justify-center">
    <div className="h-auto w-full md:h-[75vh] md:w-[87%] grid gap-3 grid-cols-1 lg:grid-cols-[50%,50%]">
      {/* Left Section (Form) */}
      <div className="grid grid-rows-[20%,70%] gap-3 p-4 md:p-0">
        <div className="uppercase text-center">
          <h2 className='text-[20px] md:text-[25px] font-bold'>Don't hesitate</h2>
          <h2 className='text-[20px] md:text-[25px] font-semibold text-blue-500'>send a message now!</h2>
        </div>
        
        <div className="grid grid-rows-[40%,60%] gap-3">
          <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-3">
            <div>
              <input type="text" className='h-[40px] w-full md:w-[97%] rounded-[20px] border border-black p-2' placeholder='First Name*' />
              <br className="md:hidden" />
              <input type="text" className='h-[40px] w-full md:w-[97%] rounded-[20px] border border-black p-2 mt-3' placeholder='Last Name*'/>
            </div>
            <div>
              <input type="email" className='h-[40px] w-full md:w-[97%] rounded-[20px] border border-black p-2' placeholder='Email*' />
              <br className="md:hidden" />
              <input type="number" className='h-[40px] w-full md:w-[97%] rounded-[20px] border border-black p-2 mt-3' placeholder='Phone Number' />
            </div>
          </div>
          <textarea className='h-[185px] w-full rounded-[20px] border border-black p-3' placeholder='Your Message'></textarea>
          <div className="h-[40px] w-full md:w-[30%] bg-blue-500 rounded-[20px] flex justify-center items-center mt-3">
            <button className='text-white font-bold'>Submit</button>
          </div>
        </div>
      </div>
      
      {/* Right Section (Contact Info) */}
      <div className="grid grid-rows-3 gap-3">
        {/* Contact Info Cards */}
        {[
          { title: 'Mailing Address', text: 'Sunny Isles Beach, Florida 33160, USA' },
          { title: 'Email Address', text: 'contact@STUDYLMScompany.com' },
          { title: 'Chat With Us', text: 'chat@STUDYLMScompany.com' }
        ].map((info, index) => (
          <div key={index} className="bg-blue-500 p-5 rounded-[13px] flex items-center justify-center">
            <div className="bg-black rounded-[20px] w-full p-4 flex flex-col items-center">
              <h2 className='text-white font-semibold'>{info.title}</h2>
              <p className='text-white font-serif'>{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact