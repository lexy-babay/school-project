import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { PiFlowerLotusFill } from "react-icons/pi";

function About5() {
  return (
    <div  className="min-h-[100vh]  grid grid-rows-[20%,80%]" >
      <div className="text-center text-[30px] grid items-center uppercase font-bold">
        <p>our core values</p>
      </div>
      <div className="p-14 grid">
        <div className=" grid grid-cols-[33%,33%,32%] gap-4">
          <div className=" bg-[url(./assets/hands-together.jpg)] bg-cover bg-center min-h-[370px] grid grid-rows-[25%,75%]  rounded-[20px]">
           <div className="bg-[#6361eb52] h-[410px] grid  rounded-[20px]">
           <div className="items-center grid justify-center">
           <div className="h-[70px] w-[70px] rounded-[35px] bg-white grid justify-center items-center"> <FaHandHoldingHeart className='text-[30px] ' /></div>
            </div>
            <div className="">
            <div className=""><p className='text-[20px] uppercase font-bold text-center '>Integrity</p></div> 
            <p className='p-2 text-[18px] font-serif text-center'>We ensure honesty, transparency, and accountability in all actions and decisions</p>
            <p className='p-2 text-[18px] font-serif text-center'>School leaders, staff, and students  demonstrate trustworthiness, fairness, and accountability in all actions.</p>
            <p className='p-2 text-[18px] font-semibold text-center'> Integrity builds a culture of respect and trust.</p>
            </div>
           </div>
        </div>
          <div className=" grid grid-rows-[25%,75%] rounded-[20px] bg-black bg-[url(./assets/handshake.jpg)] bg-cover bg-center min-h-[400px]">
            <div className="bg-[#6361eb52] h-[410px] grid  rounded-[20px]">
            <div className="items-center grid justify-center">
              <div className="h-[70px] w-[70px] rounded-[35px] bg-white grid justify-center items-center"><FaHandsHelping  className='text-[30px]' /></div>
            </div>
            <div className="text-white">
            <div className=""><p className='text-[20px] uppercase font-bold text-center '>respect</p></div> 
            <p className='p-2 text-[18px] font-serif text-center'>Fostering a culture of mutual respect among students, staff,and the community</p>
            <p className='p-2 text-[18px] font-serif text-center'>We create a respectful environment where everyone’s ideas, contributions, and differences are recognized and celebrated. </p>
            <p className='p-2 text-[18px] font-semibold text-center'>Encouraging open communication  is key to maintaining respectful interactions.</p>
            </div>
            
            </div>
          </div>
        
          <div className="grid grid-rows-[25%,75%] rounded-[20px]  bg-[url(./assets/thumbs-up.jpg)] bg-cover bg-center min-h-[370px]">
           <div className="bg-[#6361eb52] h-[410px] grid  rounded-[20px]">
           <div className="items-center grid justify-center">
              <div className="h-[70px] w-[70px] rounded-[35px] bg-white grid justify-center items-center"><PiFlowerLotusFill  className='text-[30px]'/></div>
            </div>
            <div className="">
            <div className=""><p className='text-[20px] uppercase font-bold text-center '>excellence</p></div> 
            <p className='p-2 text-[20px] font-serif text-center'>Striving for high standards in teaching, learning, and overall school performance</p>
            <p className='p-2 text-[20px] font-serif text-center'>We focus on continuous improvement in academic achievements, staff development, and resources.</p>
            <p className='p-2 text-[20px] font-semibold text-center'>Excellence encourages a culture of high expectations and results.</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About5