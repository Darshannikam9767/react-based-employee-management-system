import React from 'react'

const TaskCard = () => {
  return (
    <div className=" p-5 h-72 lg:h-full w-[93%]  lg:w-72 lg:min-w-[288px] bg-gray-400 rounded-2xl shrink-0 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">

          <div className="flex justify-between items-center text-sm">
            <h3 className=' bg-red-500 capitalize tracking-wide font-bold px-3 py-2 rounded-2xl'>high</h3>
            <h4 className='font-bold tracking-wide'>2 June 2026</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold '>Make an Web Based Project with the help of React JS and TailwindCSS</h2>
          <p className='mt-3 tracking-wide '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, eum non soluta iure itaque?</p>
      </div>
  )
}

export default TaskCard
