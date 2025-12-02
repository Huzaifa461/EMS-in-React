import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorag'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
 
const [userdata, setuserdata] = useState('')    


useEffect(() => {

//     Object destructuring

// In JavaScript, you can “unpack” values from an object using destructuring assignment.

// The returned object has two properties: emply and admin.

// Writing:

// js
// const { emply, admin } = getLocalStorage();
// is shorthand for:

// js
// const result = getLocalStorage();
// const emply = result.emply;
// const admin = result.admin;

 const {emply , admin} = getLocalStorage()
setuserdata({emply , admin})

}, [])



  return (
    <div>
      <AuthContext.Provider value={userdata}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
