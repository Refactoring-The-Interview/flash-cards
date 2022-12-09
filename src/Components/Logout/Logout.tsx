import React from "react";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

interface Props {
    setLoggedIn(successful: boolean): void;
}

export const Logout = ({ setLoggedIn }: Props) => {
    return (
        <div className="Logout">
            <button
                className="btn btn-secondary"
                onClick={() => {
                    setLoggedIn(false);
                }}
            >
                Logout
            </button>
        </div>
    );
};
