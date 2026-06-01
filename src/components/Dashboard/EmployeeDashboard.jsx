import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen'>
      <Header/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
