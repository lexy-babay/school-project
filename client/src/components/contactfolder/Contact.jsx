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
       
   <div className='h-[110vh] bg-white grid grid-rows-[20%,80%]'>
      <div className=" items-center justify-center grid">
       <h2 className='text-[30px] font-bold'>GET IN TOUCH</h2>
      </div>
       <div className=" justify-center flex">
           <div className=" h-[75vh] w-[87%] grid grid-cols-[50%,50%] gap-3">
            <div className="grid grid-rows-[20%,70%]">
              <div className="uppercase items-center text-center">
                <h2 className='text-[25px] font-bold'>Dont hesitate</h2>
                <h2 className='text-[25px] font-semibold text-blue-500'>send a message now!</h2>
              </div>
              <div className=" grid grid-rows-[40%,60%] p-4">
                <div className="grid grid-cols-[50%,50%] gap-3">
                  <div className="">
                       <div className="">
                               <input type="text" className='h-[40px] w-[97%] rounded-[20px]'style={{border:'1px solid black'}} placeholder='First Name*' />
                       </div><br />
                     <div className="">
                        <input type="text" className='h-[40px] w-[97%] rounded-[20px]'style={{border:'1px solid black'}} placeholder='Last Name*'/>
                       </div>
                  </div>
                  <div className="">
                  <div className="">
                               <input type="email" className='h-[40px] w-[97%] rounded-[20px]'style={{border:'1px solid black'}} placeholder='Email*' />
                       </div><br />
                     <div className="">
                        <input type="number" className='h-[40px] w-[97%] rounded-[20px]'style={{border:'1px solid black'}} placeholder='Phone Number' />
                       </div>
                  </div>
                </div>
                <div className="">
                  <input type="text" className='h-[185px] w-full rounded-[20px]' style={{border:'1px solid black'}} placeholder='  Your Message'/>
                </div>
                <div className="h-[40px] w-[30%] bg-blue-500  grid justify-center mt-3 rounded-[20px]">
                  <button className='text-[20px] text-white grid font-bold'>Submit</button>
                </div>
              </div>
            </div>
            <div className=" grid grid-rows-[35%,35%,33%] gap-3">
              <div className="bg-blue-500 grid p-5 rounded-[13px]">
                <div className="bg-black grid grid-rows-[40%,60%] rounded-[20px]">
                  <div className=""></div>
                  <div className="bg-white">
                    <div className="grid text-center">
                      <h2 className='text-black text-[18px] font-semibold'>Mailing Address</h2>
                      <p className='text-black font-serif'>Sunny isles Beach, Florida 33160, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500 grid p-5 rounded-[13px]">
              <div className="bg-black grid grid-rows-[40%,60%] rounded-[20px]">
                  <div className=""></div>
                  <div className="bg-white">
                       <div className="grid text-center">
                          <h2 className='text-black text-[18px] font-semibold'>Email Address</h2>
                          <p className='text-black font-serif'>contact@STUDYLMScompany.com</p>  
                       </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500 p-5 grid rounded-[13px]">
              <div className="bg-black grid grid-rows-[40%,60%] rounded-[20px]">
                  <div className=""></div>
                  <div className="bg-white">
                    <div className="grid text-center">
                      <h2 className='text-black text-[18px] font-semibold'>Chat With Us</h2>
                      <p className='text-black font-serif'>chat@STUDYLMScompany.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
       </div>
       
    </div> 
    <div className="bg-blue-500 text-white p-8">
      <div className="h-auto md:h-[65vh] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Intro */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-orange-500 mr-2">
              <i className="fas fa-book"></i> {/* Replace with an appropriate icon if available */}
            </span>
            STUDYLMS
          </h2>
          <p className="mt-4 text-sm md:text-base">
            We have over 20 years of experience providing expert educational services to both businesses and individuals. Our Investment Committee brings the latest industry expertise to drive our investment approach, portfolio construction, and allocation.
          </p>
          <button className="mt-4 px-4 py-2 border border-white text-white hover:bg-white hover:text-gray-900 transition text-sm md:text-base">
            START LEARNING NOW
          </button>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="text-xl font-semibold">Popular Courses</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center space-x-4">
              <img src="" alt="Mobile Apps Development" className="w-12 h-12 md:w-16 md:h-16" />
              <div>
                <p className="text-sm md:text-base">Introduction to Mobile Apps Development</p>
                <p className="text-blue-400 text-sm md:text-base">$99.00</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img src="" alt="Film Making" className="w-12 h-12 md:w-16 md:h-16" />
              <div>
                <p className="text-sm md:text-base">Become a Professional Film Maker</p>
                <p className="text-green-400 text-sm md:text-base">FREE</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img src="" alt="Swift Programming" className="w-12 h-12 md:w-16 md:h-16" />
              <div>
                <p className="text-sm md:text-base">Swift Programming For Beginners</p>
                <p className="text-blue-400 text-sm md:text-base">$75.00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Links and Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">All Courses</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Summer Sessions</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Recent Exams</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Professional Courses</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm md:text-base">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-4 text-sm md:text-base">
              If you want to contact us about any issue, our support is available to help you from 8am-7pm Monday to Saturday.
            </p>
            <p className="mt-4 flex items-center space-x-2 text-sm md:text-base">
              <span className="text-orange-500"><i className="fas fa-map-marker-alt"></i></span>
              <span>Address: 9015 Sunset Boulevard, United Kingdom</span>
            </p>
            <p className="mt-2 flex items-center space-x-2 text-sm md:text-base">
              <span className="text-orange-500"><i className="fas fa-phone-alt"></i></span>
              <span>Call: +215 623 7532</span>
            </p>
            <p className="mt-2 flex items-center space-x-2 text-sm md:text-base">
              <span className="text-orange-500"><i className="fas fa-envelope"></i></span>
              <span>Email: info@StudyLMS.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact