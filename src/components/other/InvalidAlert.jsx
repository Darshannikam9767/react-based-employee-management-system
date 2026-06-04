import React, { useEffect, useState } from 'react'
import { use } from 'react'

const InvalidAlert = () => {

const [show,setShow] = useState(true)

useEffect(()=>{
    setTimeout(() => {
        setShow(false)
    }, 5000);
})


if(!show) return null
  return (
    <div className='w-[70%] absolute left-1/2 -translate-x-1/2 mt-5 z-10 flex'>
     <div className="bg-[#fff5f5] border border-red-400 p-4 rounded-xl shadow-2xl drop-shadow-emerald-400 w-full text-center">
         <h3 style={{color:"red",fontWeight:"bolder",fontSize:"1.3rem"}} className=' font-medium'>Invalid credential</h3>
     </div>
    </div>
  )
}

export default InvalidAlert
