import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

function Header() {
  var [disp,setDisp] = useState('none')
   
  window.onscroll = ()=>{
    if(window.scrollY>300) {
      setDisp('block')
    }else {
      setDisp('none')
    }
  }
  return (
   <div className="" style={{display:disp}}>
       <div className='h-[80px] w-full bg-blue-500  text-white flex justify-between items-center pr-[50px] pl-10 fixed top-0 z-10' >
        <div className=" text-[30px] flex  items-center font-bold">
        <span className=' text-blue-500'><FaHome className='text-white'/></span> <h1>STUDYLMS</h1>
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
   </div>
  )
}

export default Header