import React, { useState } from "react";
import "./LoginS.scss";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { questionBank } from "../store/index";

interface Props {
    setLoggedIn(successful: boolean): void;
}

export const Login = ({ setLoggedIn }: Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [, setPopulateLocalStorageQuestions] = useLocalStorage(
        StorageKey.questionBank,
        []
    );
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    return (
        <form
            className="Login-form"
            onSubmit={(e) => {
                e.preventDefault();

                setUserInfo({ email: email, password: password });
                setPopulateLocalStorageQuestions(questionBank);
                if (userInfo.email && userInfo.password) {
                    setLoggedIn(true);
                }
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
            <button
                // type="submit"
                className="login__btn btn btn-success"
                onClick={() => {
                    setPopulateLocalStorageQuestions(questionBank);
                    setLoggedIn(true);
                }}
            >
                Continue as Guest
            </button>
        </form>
    );
};
