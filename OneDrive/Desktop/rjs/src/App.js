import React, { useState } from 'react'
import "./style.css"
import Login from './components/logInLogOut/Login';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
    const [user, setUser] = useState("Mowlid");

    if(!user) return <Login user={user} setUser={setUser}/>

  return (
    <div>
        <BrowserRouter>
          <Navigation setUser={setUser}/>
        </BrowserRouter>
    </div>
  )
}

export default App