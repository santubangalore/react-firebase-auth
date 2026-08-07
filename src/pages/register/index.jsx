import {useContext,useState} from 'react'
import { AuthContext } from '../../context'
import CommonForm from '../../components/common-form'
import { registerFormControls as formControls } from '../../config';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

/*

*/
function RegisterPage() {
  const { registerFormData, setRegisterFormData, registerWithFirebase, user } = useContext(AuthContext);
  const [ userCreated, setUserCreated] = useState(false);
  const [ userId, setUserId] = useState(null);
  const [ showDiv, setShowDiv] = useState(false);
  const [ errorMesg, setErrorMsg] = useState('');
  const navigate= useNavigate();


  function handleRegisterFormSubmit(event) {
      event.preventDefault();

      const userCredential =  registerWithFirebase().then((userCredential) => {
        if(userCredential.user) {
          const user = userCredential.user;
          setUserId(user.uid);
          setUserCreated(true);
          setShowDiv(true);
          setErrorMsg('');
          updateProfile(user,{
            displayName:registerFormData.name,

          });
          navigate("/profile");
        }
      }).catch((error)=>{
         setUserCreated(false);
         setShowDiv(true);
         setErrorMsg(error.error);
         console.error(error);
      }).finally (
        setRegisterFormData({
          name:'',
          email:'',
          password:''
        })
      ); 
  }
  
if(user)  navigate("/profile");
  return (
    <div className='w-full max-w-[75%] mx-auto justify-content 
            items-center text-center rounded-lg shadow-md flex '>
          <div className='px-6 py-5 items-center'>
            <h3>Welcome </h3>
            <p>Registration Form</p>
            <CommonForm  
              formControls={formControls}
              formData={registerFormData}
              setFormData={setRegisterFormData}
              onSubmit={handleRegisterFormSubmit}
              buttonText="Register"
            />
          </div>
          <>
          { userCreated ? (
            <div >
              <p>User created successfully!</p>
              <p>User Id: {userId}</p>
            </div>
          ): errorMesg!=""? (<div>
            <p>Error happened,{errorMesg}</p>
          </div>):null}
          </>
    </div>
  )
}

export default RegisterPage
