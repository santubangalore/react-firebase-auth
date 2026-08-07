import { useContext } from "react";
import CommonForm from "../../components/common-form";
import {loginFormControls} from '../../config';
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const {loginFormData,setLoginFormData,LoginWithFirebase }= useContext(AuthContext);
  const navigate= useNavigate();

  function handleLogin(event){
    event.preventDefault();
    LoginWithFirebase().then((result)=>{
      console.log(result);
      if(result) navigate("/profile");
    }).error((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='w-full max-w-[75%] mx-auto justify-content 
            items-center text-center rounded-lg shadow-md flex '>
      <div className='px-6 py-5 items-center'>
       <h1>Welcome</h1>
       <p>Login Page</p>
        <CommonForm 
            formControls={loginFormControls}
            formData={loginFormData}
            setFormData={setLoginFormData}
            buttonText={'Login'}
            onSubmit={handleLogin}
            />
              
      </div>
    </div>
  );
}

export default LoginPage;