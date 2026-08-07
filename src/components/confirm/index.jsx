


import React from 'react'

function Confirm({userId}) {
  return (
    <div className='w-full max-w-sm mx-auto justify-content 
            items-center text-center rounded-lg shadow-md'>
        <div className='px-6 py-5 items-center'>    
            User has been created in firebase;
            <p>User ID: {userId}</p>
        </div>      
    </div>
  )
}

export default Confirm;
