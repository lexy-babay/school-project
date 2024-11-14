import React from 'react'

function Contact3() {
  return (
    <div>
         
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
          { title: 'Email Address', text: 'contact@OLAMScompany.com' },
          { title: 'Chat With Us', text: 'chat@OLAMScompany.com' }
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

export default Contact3