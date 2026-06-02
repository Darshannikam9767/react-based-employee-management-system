import React, { useState } from 'react'

const CreateTask = () => {

const [taskTitle, setTaskTitle] = useState("")
const [date,setDate] = useState("")
const [assignTo, setAssignTo] = useState("")
const [category,setCategory] = useState("")
const [description, setDescription] = useState("")


    const formSubmit = (e)=>{
        e.preventDefault()
        console.log("form submitted...");
        setTaskTitle("")
        setDate("")
        setAssignTo("")
        setCategory("")
        setDescription("")        
    }
  return (
    <div className=" bg-[#222] rounded-2xl shadow-2xl shadow-black mt-10 w-full ">

                <form onSubmit={formSubmit}className='  flex flex-col md:flex-row lg:flex-row gap-5 md:gap-10 lg:gap-15 p-5 w-full'>
                    <div className='flex flex-col gap-3 w-full md:w-1/2 lg:w-1/2  '>
                        <h3>Task Title</h3>
                            <input onChange={(e)=>{
                                setTaskTitle(e.target.value)
                            }} value={taskTitle} className='border-2 rounded-xl px-3 py-2 outline-none border-gray-400 duration-200 focus:border-gray-700' required type="text" placeholder='Enter task title' />
                        <h3>Date</h3>
                            <input
                            onChange={(e)=>{
                                setDate(e.target.value)
                            }}
                            value={date}  className='border-2 rounded-xl px-3 py-2 outline-none border-gray-400 duration-200 focus:border-gray-700' required type="date" />
                        <h3>Assign Too</h3>
                            <input onChange={(e)=>{
                                setAssignTo(e.target.value)
                            }} value={assignTo} className='border-2 rounded-xl px-3 py-2 outline-none border-gray-400 duration-200 focus:border-gray-700' required type="text" placeholder='Employee Name' />
                        <h3>Category</h3>
                            <input 
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                            value={category} className='border-2 rounded-xl px-3 py-2 outline-none border-gray-400 duration-200 focus:border-gray-700' required type="text" placeholder='dev, design, testing, etc ....' />
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-1/2 lg:w-1/2 items-start">
                        <h3>Description</h3>
                            <textarea
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }} value={description} required className='w-full border-2 rounded-xl px-3 py-2 outline-none h-30 border-gray-400 duration-200 focus:border-gray-700' placeholder='Enter description about task.....'></textarea>
                        <button className='w-full mt-5 bg-green-700 py-2 rounded-full uppercase tracking-wider font-semibold shadow-2xl shadow-black hover:scale-98 active:scale-101 cursor-pointer duration-200'>create task</button>
                    </div>
                    
                </form>
            </div>
  )
}

export default CreateTask
