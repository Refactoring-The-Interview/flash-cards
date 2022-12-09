import React from "react";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import "./LogoutS.scss";

interface Props {
    setLoggedIn(successful: boolean): void;
}

export const Logout = ({ setLoggedIn }: Props) => {
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
                    setLoggedIn(false);
                }}
            >
                Logout
            </button>
        </div>
    );
};
