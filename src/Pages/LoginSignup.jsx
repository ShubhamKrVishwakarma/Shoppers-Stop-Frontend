import React from 'react'
import "./css/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an Account?<span> Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to use the terms of use & privacy policy!</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
