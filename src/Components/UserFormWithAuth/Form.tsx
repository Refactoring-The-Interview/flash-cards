import { useState } from "react";
import { userInfo } from "./types";

export const Form = () => {
    const [useFormInfo, setUserFormInfo] = useState<userInfo>({
        email: "",
        password: "",
        age: 0,
        about: "",
    });
    const { email, password, age, about } = useFormInfo;

    return (
        <form>
            <label>
                <h5>Email: </h5>
                <input
                    value={email}
                    onChange={(e) => {
                        const email = e.target.value;
                        setUserFormInfo({
                            ...useFormInfo,
                            email,
                        });
                    }}
                />
            </label>

            <label>
                <h5>Password: </h5>
                <input
                    value={password}
                    type="password"
                    onChange={(e) => {
                        const password = e.target.value;
                        setUserFormInfo({
                            ...useFormInfo,
                            password,
                        });
                    }}
                />
            </label>

            <label>
                <h5>Age: </h5>

                <input
                    type="number"
                    value={age}
                    onChange={(e) => {
                        const age = parseInt(e.target.value);
                        setUserFormInfo({
                            ...useFormInfo,
                            age,
                        });
                    }}
                />
            </label>

            <label>
                <h5>About: </h5>

                <textarea
                    required={true}
                    value={about}
                    onChange={(e) => {
                        const about = e.target.value;
                        setUserFormInfo({
                            ...useFormInfo,
                            about,
                        });
                    }}
                />
            </label>

            <button>Submit</button>
        </form>
    );
};
