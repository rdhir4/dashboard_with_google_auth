import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GoogleAuth = () => {
  const navigate = useNavigate();
  const response = (res: any) => {
    if(res) {
      navigate("/dashboard")
    }
  }

  const error = () => {
    console.log('err');
  }
  return (
    <GoogleLogin onSuccess={response} onError={error}/>
  )
}

export default GoogleAuth
