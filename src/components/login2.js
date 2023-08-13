import React from 'react'
import '../CSS/login2.css'

const login2 = () => {
  return (
    <>
    I am the new login page
    <div className="login-page-container">
      <div className="startup-info-container">
        <h1>Welcome to My Startup</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum velit a ipsum
          tincidunt, auctor scelerisque ligula fermentum.
        </p>
      </div>
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default login2