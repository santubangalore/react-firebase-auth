import { AuthContext } from "../../context"
import { useContext } from "react";


function ProfilePage() {

  function handleLogoutClick(event)
  {
    event.preventDefault();
    handleLogout();
  }
  const {user,handleLogout} = useContext(AuthContext);
  console.log(user);
  return (
    <div className='w-full max-w-[75%] mx-auto justify-content 
            items-center text-center rounded-lg shadow-md '>
      <div className='px-6 py-5 items-center'>

      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  )

}

export default ProfilePage
