import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleCredentials = (key, value) => {
        setCredentials(prevState => ({
            ...prevState,
            [key]: value
        }))
    }


    const Login = () => {
        navigate('/dash')
    }
  return (
    <div className='h-screen w-screen'>
        <div>
            <h1>Username:</h1>
            <input type="text" onChange={(e) => handleCredentials("username", e.target.value)}/>
            <h1>Password: </h1>
            <input type={isVisible?"text":"password"} onChange={(e) => handleCredentials("password", e.target.value)}/>
            <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"eyeopen":"eyeclose"}</button>
        </div>
        <div>
            <button onClick={Login}>Login</button>
        </div>

    </div>
  )
}
