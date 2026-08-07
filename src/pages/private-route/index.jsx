

import React, { useContext } from 'react'
import { AuthContext } from '../../context'
import { Navigate } from 'react-router-dom';

function AuthPage({children}) {
  const {user} = useContext(AuthContext);
    console.log('user in Auth:',user);
  if (user) return children;

  
  return (
    <div>
     <Navigate to={'/login'} />
    </div>
  )
}

export default AuthPage
