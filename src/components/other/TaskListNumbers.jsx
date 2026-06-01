import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap w-full mt-10 justify-between gap-5 '>
      <div className="flex flex-col  w-[48%] bg-blue-400 rounded-2xl py-6 px-8 justify-center gap-[10%] transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>

      <div className="flex flex-col  w-[48%] bg-green-400 rounded-2xl py-6 px-8 justify-center gap-[10%] transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>Completed</h3>
      </div>

      <div className="flex flex-col  w-[48%] bg-yellow-400 rounded-2xl py-6 px-8 justify-center gap-[10%] transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>Accepted</h3>
      </div>

      <div className="flex flex-col  w-[48%] bg-red-400 rounded-2xl py-6 px-8 justify-center gap-[10%] transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
