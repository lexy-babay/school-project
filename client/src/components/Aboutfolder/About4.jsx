import React from 'react';

function About4() {
  return (
    <div className="min-h-[75vh] grid p-11">
      {/* <div className=" grid grid-cols-[50%,50%] ">
        <div className=" grid p-14 justify-end">
          <div className="">
          <div className=" text-[45px] text-end text-blue-700 mb-3 grid">
           <h2 className=''>Expertise you</h2>
           <h2> can count on</h2>
          </div>
          <div className="h-[50px] w-[100%] text-center items-center grid bg-black rounded-[20px] ">
            <button className='text-[20px] text-white capitalize '><a href="#about us">Learn more about us</a></button>
          </div>
          </div>
          </div>
         </div> */}
          
    <div className="h-auto min-h-[75vh] p-6 sm:p-8 md:p-11 grid">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-6">
        {/* Left Section */}
        <div className="grid p-4 sm:p-8 md:p-14 justify-center md:justify-end">
          <div>
            <div className="text-[32px] sm:text-[36px] md:text-[45px] text-blue-700 mb-3 grid text-center md:text-end">
              <h2>Expertise you</h2>
              <h2>can count on</h2>
            </div>
            <div className="h-[50px] w-full text-center grid bg-black rounded-[20px]">
              <button className="text-[16px] sm:text-[18px] md:text-[20px] text-white capitalize">
                <a href="#about-us">Learn more about us</a>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid p-4">
          <div>
            {/* Student Information Management */}
            <div className="mb-4">
              <p className="text-[18px] sm:text-[20px] font-bold">Student Information Management</p>
              <p className="text-[14px] sm:text-[16px] ml-4">
                Centralized storage of student data (personal details, attendance, grades, health records, etc.). Quick access
                to student profiles and history. Integration with enrollment and admission processes.
              </p>
            </div>

            {/* Attendance Management */}
            <div className="mb-4">
              <p className="text-[18px] sm:text-[20px] font-bold">Attendance Management</p>
              <p className="text-[14px] sm:text-[16px] ml-4">
                Automated tracking of student and teacher attendance. Alerts for absenteeism, tardiness, or irregular
                attendance. Reports and analysis to identify trends or areas of concern.
              </p>
            </div>

            {/* Timetable Management */}
            <div className="mb-4">
              <p className="text-[18px] sm:text-[20px] font-bold">Timetable Management</p>
              <p className="text-[14px] sm:text-[16px] ml-4">
                Easy creation and management of class schedules. Real-time updates on timetable changes. Ability to track
                room assignments, teacher availability, and subject allocation.
              </p>
            </div>

            {/* Grade and Examination Management */}
            <div>
              <p className="text-[18px] sm:text-[20px] font-bold">Grade and Examination Management</p>
              <p className="text-[14px] sm:text-[16px] ml-4">
                Recording and storing grades, marks, and exam results. Generation of report cards and progress reports. Tools
                for creating and scheduling exams, assignments, and quizzes. Analysis tools to identify performance patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About4;
