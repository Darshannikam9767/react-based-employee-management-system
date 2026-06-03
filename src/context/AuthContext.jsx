import React, { createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthProvider = createContext()


const AuthContext = ({children}) => {

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  return (
    <>
    <AuthProvider.Provider value={""}>
      {children}
    </AuthProvider.Provider>
    </>
  )
}

export default AuthContext
