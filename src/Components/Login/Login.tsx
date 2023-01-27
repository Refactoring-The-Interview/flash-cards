import React, { useState } from "react";
import "./LoginS.scss";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { questionBank } from "../store/index";
import { Paths } from "../../Apis/types";

import { Button, Form, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const [, setPopulateLocalStorageQuestions] = useLocalStorage(
        StorageKey.questionBank,
        []
    );
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: email,
        password: password,
    });

    return (
        <>
            <Form
                className="Login-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({ email: email, password: password });
                    setPopulateLocalStorageQuestions(questionBank);
                    console.log(userInfo);
                    if (userInfo.email.length > 1) {
                        navigate(Paths.home);
                    }
                }}
            >
                <FormGroup>
                    <Form.Label htmlFor="email">Email address</Form.Label>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Form.Label htmlFor="password">Password</Form.Label>
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
                </FormGroup>
                <Button type="submit" variant="primary">
                    Login
                </Button>
            </Form>

            <Button
                type="button"
                variant="success"
                onClick={() => {
                    setPopulateLocalStorageQuestions(questionBank);
                    setUserInfo({ email: "guest", password: "guestPassword" });
                }}
            >
                Continue as Guest
            </Button>
        </>
    );
};
