import {useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../FirebaseConfig";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  
const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [user, setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  
  function registerWithFirebase() 
  { 
    const { name, email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function LoginWithFirebase()
  {
    const { email, password } = loginFormData;
    console.log('email,password:',email,password);
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
     const checkAuthstate=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
         setLoading(false);
    });
    return ()=>{
      checkAuthstate();
    };
  },[]);

  console.log('user:',user);

  return (
    <AuthContext.Provider value={{ 
     registerFormData, setRegisterFormData,
     registerWithFirebase, user ,
     loginFormData, setLoginFormData,LoginWithFirebase
     }}>
      {children}
    </AuthContext.Provider>
  );
}