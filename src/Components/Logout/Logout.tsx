import React from "react";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import "./LogoutS.scss";
import { Button } from "react-bootstrap";

export const Logout = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    return (
        <div className="Logout">
            <Button
                variant="outline-secondary"
                onClick={() => {
                    if (userInfo) {
                        setUserInfo({ email: "", password: "" });
                    }
                }}
            >
                Logout
            </Button>
        </div>
    );
};
