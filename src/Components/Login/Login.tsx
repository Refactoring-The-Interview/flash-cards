import React, { useEffect, useState } from "react";
import "./LoginS.scss";
import { useLocalStorage } from "../LocalStorage/LocalStorage";

interface Props {
  setLoggedIn(successful: boolean): void;
}

export const Login = ({ setLoggedIn }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", {
    email: "",
    password: "",
  });

  return (
    <form
      className="Login-form"
      onSubmit={(e) => {
        e.preventDefault();

        // TODO Add check to make sure that the user exists and password is correct

        setUserInfo({ email: email, password: password });
        setLoggedIn(true);
      }}
    >
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="login__btn btn btn-primary">
        Submit
      </button>
    </form>
  );
};
