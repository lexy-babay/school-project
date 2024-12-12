import React from 'react';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';
import { PiFlowerLotusFill } from 'react-icons/pi';

function About5() {
  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Header Section */}
      <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-8">
        <p>Our Core Values</p>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Integrity Card */}
        <div className="bg-blue-500 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          {/* Icon */}
          <div className="bg-white h-16 w-16 flex items-center justify-center rounded-full mb-4 shadow-md">
            <FaHandHoldingHeart className="text-blue-500 text-2xl sm:text-3xl" />
          </div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Integrity</h3>
          {/* Description */}
          <p className="text-sm sm:text-base text-white">
            We ensure honesty, transparency, and accountability in all actions and decisions.
          </p>
          <p className="text-sm sm:text-base text-white mt-2">
            School leaders, staff, and students demonstrate trustworthiness, fairness, and accountability in all actions.
          </p>
          <p className="text-sm sm:text-base text-white mt-2 font-semibold">
            Integrity builds a culture of respect and trust.
          </p>
        </div>

        {/* Respect Card */}
        <div className="bg-black rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          {/* Icon */}
          <div className="bg-white h-16 w-16 flex items-center justify-center rounded-full mb-4 shadow-md">
            <FaHandsHelping className="text-black text-2xl sm:text-3xl" />
          </div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Respect</h3>
          {/* Description */}
          <p className="text-sm sm:text-base text-white">
            Fostering a culture of mutual respect among students, staff, and the community.
          </p>
          <p className="text-sm sm:text-base text-white mt-2">
            We create a respectful environment where everyone’s ideas, contributions, and differences are recognized and celebrated.
          </p>
          <p className="text-sm sm:text-base text-white mt-2 font-semibold">
            Encouraging open communication is key to maintaining respectful interactions.
          </p>
        </div>

        {/* Excellence Card */}
        <div className="bg-blue-500 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          {/* Icon */}
          <div className="bg-white h-16 w-16 flex items-center justify-center rounded-full mb-4 shadow-md">
            <PiFlowerLotusFill className="text-blue-500 text-2xl sm:text-3xl" />
>>>>>>> ec5a5976324d36efa21d31ae663bf0b87874a85e
          </div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Excellence</h3>
          {/* Description */}
          <p className="text-sm sm:text-base text-white">
            Striving for high standards in teaching, learning, and overall school performance.
          </p>
          <p className="text-sm sm:text-base text-white mt-2">
            We focus on continuous improvement in academic achievements, staff development, and resources.
          </p>
          <p className="text-sm sm:text-base text-white mt-2 font-semibold">
            Excellence encourages a culture of high expectations and results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About5;
