import React from 'react'
import StyledloginFormHeader from './loginFormHeader.styles'
import GoogleAuth from '../../../Auth/Google/googleAuth'

const LoginFormHeader = () => {
  return (
    <StyledloginFormHeader>
      <div className='da-header-title-cn'>
        <div className='da-header'>Sign In</div>
        <div className='da-desc'>Sign in to your account</div>
      </div>
      <GoogleAuth/>
    </StyledloginFormHeader>
  )
}

export default LoginFormHeader


