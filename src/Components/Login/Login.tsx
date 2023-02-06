import React, { useState } from "react";
import "./LoginS.scss";
import { Card } from "react-bootstrap";
import { LoginForm } from "./LoginForm/LoginFrom";
import { Guest } from "./Guest/Guest";

export const Login = () => {
    return (
        <>
            <Card>
                <Card.Header>
                    <h2>User Login</h2>
                </Card.Header>
                <Card.Body>
                    <LoginForm />
                    <Guest />
                </Card.Body>
            </Card>
        </>
    );
};
