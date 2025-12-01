import React from 'react'

const AuthContext = ({children}) => {
  return (
    <div>                                             
      {children}
    </div>
  )
}

export default AuthContext


// Lsn 01:- In React, any JSX you put between a component’s opening and closing tags becomes its children prop.
// This is why <App/> is treated as a child of <AuthContext>