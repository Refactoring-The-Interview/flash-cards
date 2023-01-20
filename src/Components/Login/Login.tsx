import React, { useState } from "react";
import "./LoginS.scss";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { questionBank } from "../store/index";
import { Paths } from "../store/types";
import { Button } from "react-bootstrap";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [, setPopulateLocalStorageQuestions] = useLocalStorage(
        StorageKey.questionBank,
        []
    );
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: email,
        password: password,
    });

    return (
        <form
            className="Login-form"
            onSubmit={(e) => {
                e.preventDefault();
                setUserInfo({ email: email, password: password });
                setPopulateLocalStorageQuestions(questionBank);
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
            <Button
                type="submit"
                className="login__btn btn btn-primary"
                href={userInfo.email.length > 0 ? Paths.home : Paths.login}
            >
                Submit
            </Button>
            <button
                type="submit"
                className="login__btn btn btn-success"
                onClick={() => {
                    setPopulateLocalStorageQuestions(questionBank);
                    setUserInfo({ email: "guest", password: "guestPassword" });
                }}
            >
                Continue as Guest
            </button>
        </form>
    );
};
