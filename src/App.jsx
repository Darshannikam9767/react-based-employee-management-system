import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)


  const handleLogin = (email,password)=>{
      if(email == "admin@gmail.com" && password == "password@123"){
        console.log("This is admin side..");
        setUser("admin")
        
      }else if(email == "emp@gmail.com" && password == "emp@123"){
        console.log("This is employee side..");
        setUser("employee")
      }else{
        alert("invalid credential...")
      }
      
  }



  return (
    <>
      {!user ? <Login  handleLogin = {handleLogin}/>:""}
      {user == "admin" && <AdminDashboard user = {user} setUser = {setUser}/>}
      {user == "employee" && <EmployeeDashboard user = {user} setUser = {setUser}/>}
    </>
  )
}

export default App
