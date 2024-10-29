import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <div className='h-[80px] w-full bg-black text-white flex justify-between items-center pr-[50px] pl-10 fixed top-0 z-10'>
        <div className=" text-[30px] flex  items-center font-bold">
        <span className=' text-yellow-500'><FaHome /></span> <h1>STUDYLMS</h1>
        </div>

        <nav className=' flex gap-[70px]'>
            <Link to='/'>Home</Link>
            <Link>Contact</Link>
            <Link>Blog</Link>
            <Link className=' parent  relative'>Sevices
            
            
            <nav className='child h-[150px] w-[150px] absolute top-[0px] right-[-40px]'>
               <div className="h-[150px] w-[150px] flex flex-col justify-end gap-2">
               <Link><div className='h-[50px] w-full bg-green-500 text-center'>
                    Login
                </div></Link>

                <Link><div className='h-[50px] w-full bg-green-500 text-center'>
                    Register
                </div></Link>

               </div>
            </nav></Link>
        </nav>
    </div>
  )
}

export default Header