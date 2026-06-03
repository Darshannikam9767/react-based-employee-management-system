import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({user,setUser}) => {
  return (
    <div className='bg-[#1c1c1c] p-10 h-auto   w-full'>
        <Header user = {user} setUser = {setUser}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
