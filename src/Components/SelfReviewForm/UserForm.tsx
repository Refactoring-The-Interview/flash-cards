import { useState } from "react";
import { userFields } from "./types";
import { UserFromInputFields } from "./UserFromInputFields";
import "./UserFromS.scss";
import { emailAuth, passwordAuth } from "./utils";

export const UserFrom = () => {
    const [userFormInfo, setUserFormInfo] = useState<userFields>({
        email: "",
        password: "",
        date: new Date(),
        safetyQuestions: "",
    });
    const { email, password } = userFormInfo;
    return (
        <form
            className="UserFrom"
            onSubmit={(e) => {
                e.preventDefault();
                if (emailAuth({ email }) && passwordAuth(password))
                    console.log(
                        "welcome user your email and password have been accepted"
                    );
            }}
        >
            <UserFromInputFields
                value={userFormInfo}
                setValue={setUserFormInfo}
            />
            <div className="UserFrom-submitBtn">
                <button>Submit From</button>
            </div>
        </form>
    );
};
