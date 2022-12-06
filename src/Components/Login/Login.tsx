import React from "react";
import './LoginS.scss';

const Login = (props:any) => {

  return (
    <form className="Login-form" onSubmit={(e) => {
      e.preventDefault();
      props.loggedIn()
    }}>
    <div className="form-group" >
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password"/>
    </div>
    <button type="submit" className="login__btn btn btn-primary"
    >Submit</button>
  </form>
  )
}

export default Login;