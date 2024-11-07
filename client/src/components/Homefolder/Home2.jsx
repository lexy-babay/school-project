import React from 'react';

function Home2() {
  return (
    <div className='h-auto md:h-[50vh] bg-white grid p-6 md:p-14'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="bg-[url('./assets/pexels1.jpg')] bg-cover bg-center grid grid-rows-[80%,20%] h-[200px] md:h-[230px]">
          <div className=''></div>
          <div className='bg-slate-300 text-center text-black'>
            <p className='text-[18px] md:text-[25px] font-semibold'>Best Photography Lessons</p>
          </div>
        </div>
        <div className="bg-[url('./assets/pexels2.jpg')] bg-cover bg-bottom grid grid-rows-[80%,20%] h-[200px] md:h-[230px]">
          <div className=''></div>
          <div className='bg-slate-300 text-center text-black'>
            <p className='text-[18px] md:text-[25px] font-semibold'>Tutorial Codes For Startup</p>
          </div>
        </div>
        <div className="bg-[url('./assets/pexels3.jpg')] bg-cover bg-center grid grid-rows-[80%,20%] h-[200px] md:h-[230px]">
          <div className=''></div>
          <div className='bg-slate-300 text-center text-black'>
            <p className='text-[18px] md:text-[25px] font-semibold'>Wordpress Secret Tips</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
