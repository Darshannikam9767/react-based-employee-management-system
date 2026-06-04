import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import InvalidAlert from './components/other/InvalidAlert'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [isValid, setIsValid] = useState(false)
  
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      if (parsedUser.data) {
        setLoggedInUserData(parsedUser.data)
      }
    }
  }, [authData])

  const handleLogin = (email, password) => {
    // CRITICAL FIX: Target authData.userData instead of searching authData directly
    if (authData && authData.userData) {
      const admin = authData.userData.adminData?.find((e) => email == e.email && password == e.password)
      const employee = authData.userData.empData?.find((e) => email == e.email && password == e.password)

      if (admin) {
        setUser("admin")
        setLoggedInUserData(admin)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }))
        return 
      } 
      
      if (employee) {
        setUser("employee")     
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee })) 
        return 
      }
    }
    
    setIsValid(true)
    setTimeout(() => {
      setIsValid(false)
    }, 4000)
  }

  return (
    <>
      {isValid && <InvalidAlert />}
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard loggedInUserData={loggedInUserData} user={user} setUser={setUser} />}
      {user == "employee" && <EmployeeDashboard loggedInUserData={loggedInUserData} user={user} setUser={setUser} />}
    </>
  )
}

export default App