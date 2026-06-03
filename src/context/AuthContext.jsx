import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// 1. Named export for the context object
export const AuthProvider = createContext()

// 2. Renamed component to avoid conflicts
const AuthWrapper = ({ children }) => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setLocalStorage()
    const data = getLocalStorage()
    
    // Safety check: only update if data actually exists
    if (data) {
      const { employee, admin } = data
      setUserData({ employee, admin })
    }
  }, [])

  return (
    // FIX: Fallback to an empty object if userData is ever null or undefined
    <AuthProvider.Provider value={userData || {}}>
      {children}
    </AuthProvider.Provider>
  )
}

// 3. Clear default export of the wrapper component
export default AuthWrapper
