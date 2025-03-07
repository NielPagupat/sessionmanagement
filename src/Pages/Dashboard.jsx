import React from 'react'
import { useSelector } from 'react-redux'
export default function Dashboard() {
  const credentials = useSelector((state)=>state.credentials)
  return (
    <div>
      <h1>email: {credentials.email}</h1>
      <h1>id: {credentials.id}</h1>
      <h1>access token : {credentials.access_token}</h1>
      <h1>refresh token: {credentials.refresh_token}</h1>
    </div>
  )
}
