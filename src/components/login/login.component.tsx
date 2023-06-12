import React from 'react'
import LoginSidebar from './LoginSidebar/loginSidebar.component'
import LoginForm from './LoginForm/loginForm.component'
import StyledLogin from './login.styles'
import { GoogleOAuthProvider } from '@react-oauth/google'
 
const Login = () => {
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
  return (
    <StyledLogin>
      <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID as string}>
        <LoginSidebar/>
        <LoginForm/>
      </GoogleOAuthProvider>
    </StyledLogin>
  )
}

export default Login
