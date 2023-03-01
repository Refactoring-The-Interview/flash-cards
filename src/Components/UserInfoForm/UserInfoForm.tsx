import { useState } from "react";
import { UserProps } from "./types";
import { FormInputs } from "./FormInputs";

export const UserInfoForm = () => {
    const [userInfo, setUserInfo] = useState<UserProps>({
        email: "",
        password: "",
        date: new Date(),
        numbers: [],
    });
    return (
        <div>
            <h2>User Info Form</h2>
            <FormInputs value={userInfo} setValue={setUserInfo} />
        </div>
    );
};
