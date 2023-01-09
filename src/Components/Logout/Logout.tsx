import React from "react";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import "./LogoutS.scss";

export const Logout = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    return (
        <div className="Logout">
            <button
                className="logout-btn btn btn-secondary"
                onClick={() => {
                    if (userInfo) {
                        setUserInfo({ email: "", password: "" });
                    }
                }}
            >
                Logout
            </button>
        </div>
    );
};
