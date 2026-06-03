import React from 'react'

const Header = ({user,setUser}) => {

  const logoutHandler = ()=>{
      console.log("logout button clicked...");
      setUser("")
      
  }

  return (
    <div className=' flex items-end  justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold capitalize'>{user} Darshan 👋</span></h1>
      <button onClick={logoutHandler}  className='text-lg font-semibold tracking-wide bg-red-600 py-1 px-4 rounded-2xl shadow-red-600/30 shadow-xl cursor-pointer hover:scale-98 duration-150 hover:bg-red-500 active:scale-101 active:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header
