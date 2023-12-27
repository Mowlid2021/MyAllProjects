import React, { useState } from 'react'

function Login({setUser}) {

    const [userName, setUserName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser(userName)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='input your passowr' 
             onChange={(e)=> setUserName(e.target.value)}
            />
            <button>Login</button>
            <p>{userName}</p>
        </form>
    </div>
  )
}

export default Login