import React from 'react'

function About4() {
  return (

    <div className="h-[75vh] grid p-11">
      <div className=" grid grid-cols-[50%,50%] ">
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
        <div className="grid p-4">
          <div className="">
          <div className="">
            <p className='text-[20px] font-bold'>Student Information Management</p>
            <p className='grid ml-4 mb-2'> Centralized storage of student data (personal details, attendance, grades, health records, etc.
              Quick access to student profiles and history. Integration with enrollment and admission processes</p>
            </div>
            <div className="">
              <p className='text-[20px] font-bold'>Attendance Management</p>
              <p className='grid ml-4 mb-2'>Automated tracking of student and teacher attendance.Alerts for absenteeism, tardiness, or irregular attendance.
                  Reports and analysis to identify trends or areas of concern.</p>
            </div>
            <div className="">
              <p  className='text-[20px] font-bold'>Timetable Management</p>
              <p className='grid ml-4 mb-2'>Easy creation and management of class schedules.Real-time updates on timetable changes.
                Ability to track room assignments, teacher availability, and subject allocation.</p>
            </div>
            <div className="">
              <p className='text-[20px] font-bold'>Grade and Examination Management</p>
              <p  className='grid ml-4'>Recording and storing grades, marks, and exam results.Generation of report cards and progress reports.
               Tools for creating and scheduling exams, assignments, and quizzes.Analysis tools to identify performance patterns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About4