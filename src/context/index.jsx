import {useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    return signInWithEmailAndPassword(auth,email,password);
  }
  function handleLogout(){
    return signOut(auth);
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


  return (
    <AuthContext.Provider value={{ 
      registerFormData, setRegisterFormData,
      registerWithFirebase, user, loginFormData,
      setLoginFormData, LoginWithFirebase, handleLogout
     }}>
      {children}
    </AuthContext.Provider>
  );
}