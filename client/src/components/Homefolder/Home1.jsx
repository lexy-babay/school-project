import React from 'react';
import { TfiCup } from "react-icons/tfi";
import { FaTv, FaHome } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Home1() {
  return (
    <div className="h-screen w-full bg-[url('/src/assets/book.jpg')] bg-cover bg-center flex flex-col items-center justify-end">
      <header className='h-[80px] w-full bg-transparent text-black flex justify-between items-center px-4 md:px-10 fixed top-0 z-10'>
        <div className="flex items-center font-bold text-[24px] md:text-[30px]">
          <FaHome className='text-blue-500' />
          <h1 className='ml-2'>STUDYLMS</h1>
        </div>

        <nav className='hidden md:flex gap-4 lg:gap-[70px]'>
          <Link to='/' className='hover:text-blue-500 transition'>Home</Link>
          <Link to='/contact' className='hover:text-blue-500 transition'>Contact</Link>
          <Link to='/blog' className='hover:text-blue-500 transition'>Blog</Link>
          <div className='relative'>
            <Link to='/services' className='hover:text-blue-500 transition'>Services</Link>
            <nav className='hidden md:block absolute top-[50px] right-0 bg-white shadow-lg rounded-lg'>
              <Link to='/login'>
                {/* <div className='h-[50px] w-[150px] bg-blue-500 text-white flex justify-center items-center hover:bg-blue-600 transition'>Login</div> */}
              </Link>
              <Link to='/register'>
                {/* <div className='h-[50px] w-[150px] bg-blue-500 text-white flex justify-center items-center hover:bg-blue-600 transition'>Register</div> */}
              </Link>
            </nav>
          </div>
        </nav>
      </header>

      <div className="flex items-end justify-center w-full h-full px-4 md:px-0">
        <div className="w-full md:w-[90%] h-[80vh] grid grid-rows-[70%,30%] gap-4">
          <div className="grid justify-items-center md:justify-items-start text-center md:text-left">
            <h1 className='text-[32px] md:text-[50px]'>Education & Training</h1>
            <h1 className='text-[32px] md:text-[50px]'>Organization</h1>
            <div className="font-medium text-[15px] md:text-[22px] mt-3 text-sky-500 bg-[red] h-[80px] w-[40%]">
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
