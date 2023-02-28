import { useState } from "react";
import { UserDataProps } from "./types";
import { UserFormInputs } from "./UserFormInputs";
import "./UserDataFormS.scss";
import { UserAuths } from "./utils";

export const UserDataForm = () => {
    const [userData, setUserData] = useState<UserDataProps>({
        email: "",
        about: "",
        date: new Date(),
        password: "",
    });
    return (
        <div className="UserDataForm">
            <h3>User Data Form</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(UserAuths(userData));
                }}
            >
                <UserFormInputs value={userData} setValue={setUserData} />
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
};
