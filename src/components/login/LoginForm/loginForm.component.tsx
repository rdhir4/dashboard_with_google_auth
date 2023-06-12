import React, { useState } from 'react'
import StyledLoginForm from './loginForm.styles';
import LoginFormHeader from './LoginFormHeader/loginFormHeader.component';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInClickHandler = () => {
    if(email && password) {
      navigate("/dashboard")
    }
  }

  return (
    <StyledLoginForm>
      <div className='da-form-with-header-cn'>
        <LoginFormHeader/>
        <div className='da-login-form-cn'>
          <div className='da-login-form'>
            <label htmlFor = "email">
              Email address
              <input id = "email" className='da-email' type="email" onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <label htmlFor = "password">
              Password
              <input id = "password" className='da-password' type="password"  onChange={(event) => setPassword(event.target.value)}/>
            </label>
          </div>
          <span className='da-forgot-pass'>Forgot Password?</span>
          <button className='da-signin-btn' type="button" onClick={signInClickHandler}>Sign In</button>
        </div>
      </div>
    </StyledLoginForm>
  )
}

export default LoginForm
