import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-body">
      <span id="login-txt">Please Login:</span>
      <div className="login-container">
        <form className="login-form">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="eamil"
            placeholder="Your Email Address"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
