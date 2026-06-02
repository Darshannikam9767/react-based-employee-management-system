import React from 'react'
import TaskCard from './TaskCard'

const TaskList = () => {
  return (
    // Parent Container
    <div id='taskList' className='flex flex-col lg:flex-row gap-5 w-full p-5  mt-10
                    h-auto lg:h-[50%] 
                    overflow-y-auto lg:overflow-x-auto 
                    flex-wrap lg:flex-nowrap 
                    items-center justify-start'>
      
     
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>

    </div>
  )
}

export default TaskList
