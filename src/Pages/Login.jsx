import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { LoginData } from '../API/API'
import { setEmail, setAccessToken, setId, setRefreshToken } from '../slice'
import { useDispatch } from 'react-redux'
export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleCredentials = (key, value) => {
        setCredentials(prevState => ({
            ...prevState,
            [key]: value
        }))
    }


    const login = async () => {
        const auth = await LoginData(credentials)
        if (auth.session != null) {
            if (
                dispatch(setEmail(auth.session.user.email)) &&
                dispatch(setId(auth.session.user.id)) &&
                dispatch(setAccessToken(auth.session.access_token)) &&
                dispatch(setRefreshToken(auth.session.refresh_token))
            ) {
                navigate("/dash")
            }
        } else {
            alert("invalid credentials")
        }
    }
  return (
    <div className='h-screen w-screen'>
        <div>
            <h1>Username:</h1>
            <input type="text" onChange={(e) => handleCredentials("email", e.target.value)} className='border'/>
            <h1>Password: </h1>
            <input type={isVisible?"text":"password"} onChange={(e) => handleCredentials("password", e.target.value)} className='border'/>
            <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"eyeopen":"eyeclose"}</button>
        </div>
        <div>
            <button onClick={login}>Login</button>
        </div>

    </div>
  )
}
