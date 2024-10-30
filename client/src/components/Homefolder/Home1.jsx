import React from 'react'
import { TfiCup } from "react-icons/tfi";
import { FaTv } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";



function Home1() {
  return (
    <div className='h-[110vh] w-full  him flex flex-cols items-center justify-end'>
      <div className='h-[80px] w-full bg-transparent  text-black flex justify-between items-center pr-[50px] pl-10 fixed top-0 z-10' >
        <div className=" text-[30px] flex  items-center font-bold">
        <span className=' text-blue-500'><FaHome /></span> <h1>STUDYLMS</h1>
        </div>

        <nav className=' flex gap-[70px]'>
            <Link to='/' className='hover:text-blue-500'>Home</Link>
            <Link className='hover:text-blue-500'>Contact</Link>
            <Link className='hover:text-blue-500'>Blog</Link>
            <Link className=' parent  relative hover:text-blue-500 ></nav>'>Sevices
            
            
            <nav className='child h-[150px] w-[150px] absolute top-[0px] right-[-40px]'>
               <div className="h-[150px] w-[150px] flex flex-col justify-end gap-2">
               <Link><div className='h-[50px] w-full bg-blue-500 justify-center items-center flex text-white'>
                    Login
                </div></Link>

                <Link><div className='h-[50px] w-full bg-blue-500 flex justify-center items-center text-white'>
                    Register
                </div></Link>

               </div>
            </nav></Link>
        </nav>
    </div>
   <div className=" flex items-end justify-center w-[100%] h-[110vh]">
    <div className=" w-[90%] h-[80vh] grid grid-rows-[70%,30%]">
        <div className="  grid">
          <div className="g-0">
               <h1 className='text-[50px]'>Education & Training</h1>
               <h1 className='text-[50px]'>Organization</h1>
            <div className="font-medium text-[22px] mt-3 text-sky-500">
              <p>We offer the most complete course package in the country,for the</p>
              <p>research,design and development of Education.</p>
            </div>
            <div className="flex gap-4 mt-8">
              <button className='h-[60px] w-[160px] bg-blue-500 uppercase hover:bg-blue-600'>Our courses</button>
              <button className='h-[60px] w-[160px] bg-black text-white uppercase hover:bg-slate-950'>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 grid grid-cols-[34%,32%,34%]">
          <div className="hover:bg-blue-700 text-white flex gap-5 items-center p-4"><TfiCup className='text-5xl' />
             <div className="">
                <h1 className='text-[25px] font-bold'>World's best instructors</h1>
                <h1 className='uppercase text-[15px] '>View more</h1>
              </div>
          </div>
          <div className=" hover:bg-blue-700 flex gap-6 items-center p-4"><FaTv className='text-5xl' />
             <div className="">
                <h1 className='text-[25px] font-bold'>Learn Courses Online</h1>
                <h1 className='uppercase text-[15px]'>View more</h1>
              </div>
          </div>
          <div className="hover:bg-blue-700 flex gap-5 items-center p-4"><IoBookOutline className='text-5xl' />
              <div className="">
                <h1 className='text-[25px] font-bold'>Online Library & Store</h1>
                <h1 className='uppercase text-[15px]'>View more</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home1