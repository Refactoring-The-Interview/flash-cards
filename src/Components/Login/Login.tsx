import React,{useEffect, useState} from "react";
import './LoginS.scss';
import { useLocalStorage } from "../LocalStorage/LocalStorage";


const Login = (props:any) => {
  const [email, setEmail] = useLocalStorage('email','')


  return (
    <form className="Login-form" onSubmit={(e) => {
      e.preventDefault();
      props.loggedIn()
    }}>
    <div className="form-group" >
      <label htmlFor="email"
      >Email address</label>
      <input
       value = {email}
       onChange={(e) => {
         setEmail(e.target.value)
       }}
      type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
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