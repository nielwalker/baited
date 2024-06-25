import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './reg-design.css'
import './reg.js'
import './registerFunction.js'
function App() {
  const [] = useState(0)

  return (
    <>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="reg-design.css" />
  <h2>Click&amp;Eat</h2>
  <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form id="MainForm2">
        <h1>Create Account</h1>
        <input id="register-email" type="email" placeholder="Email" />
        <input id="register-firstname" type="text" placeholder="FirstName" />
        <input id="register-lastname" type="text" placeholder="LastName" />
        <input id="register-password" type="password" placeholder="Password" />
        <input id="register-location" type="text" placeholder="Address" />
        <button type="submit" className="btn btn-primary" id="register-btn">
          Register
        </button>
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form id="MainForm">
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          id="login-email"
          name="login-email"
        />
        <input
          type="password"
          placeholder="Password"
          id="login-password"
          name="login-password"
        />
        <a href="#">Forgot your password?</a>
        <button type="button" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn">
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp" type="send">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p>
      Created with <i className="fa fa-heart" /> by
      <a target="_blank" href="https://florin-pop.com">
        Florin Pop
      </a>
      - Read how I created this and how you can join the challenge
      <a
        target="_blank"
        href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
      >
        here
      </a>
      .
    </p>
  </footer>
</>

    </>
  )
}

export default App
