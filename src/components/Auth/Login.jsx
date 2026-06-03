import { useState } from "react";

const Login = ({handleLogin}) => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const formHandler = (e) =>{
  e.preventDefault()
  
  handleLogin(email,password)
  
  setEmail("")
  setPassword("")
}

// localStorage.clear()

  return (
    <div className=" overflow-hidden flex items-center justify-center h-screen w-screen ">
      <div className="overflow-hidden flex items-center justify-center bg-[#222] shadow-2xl shadow-black  py-10 px-2 lg:p-15 md:p-10 rounded-2xl">
            <form onSubmit={formHandler} className="flex flex-col  items-center justify-center">

                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} required className=" bg-transparent text-xl border-2 outline-none border-emerald-600 rounded-full py-2 px-5 placeholder:text-gray-400" type="email"  placeholder="Enter your Email"/>
                <input value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} required className=" bg-transparent text-xl border-2 outline-none border-emerald-600 rounded-full py-2 px-5 placeholder:text-gray-400 mt-5" type="password" placeholder="Enter password" />
                <button className="mt-10 text-xl bg-emerald-600 outline-none  rounded-full py-2 px-5 hover:scale-98 hover:bg-emerald-500 duration-150 hover:cursor-pointer active:scale-101 active:bg-emerald-700 shadow-xl shadow-black">Log In</button>
            </form>
      </div>
    </div>
  )
}

export default Login
