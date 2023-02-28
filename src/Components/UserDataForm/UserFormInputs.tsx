import { UserDataProps } from "./types";
import "./UserFormInputsS.scss";

interface Props {
    value: UserDataProps;
    setValue(value: UserDataProps): void;
}

export const UserFormInputs = ({ value, setValue }: Props) => {
    const { email, about, password, date } = value;
    return (
        <div className="UserFormInputs">
            <label className="UserFormInput">
                <h6>Email: </h6>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        const email = e.target.value;
                        setValue({
                            ...value,
                            email,
                        });
                    }}
                />
            </label>
            <label className="UserFormInput">
                <h6>password: </h6>
                <input
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                        const password = e.target.value;
                        setValue({
                            ...value,
                            password,
                        });
                    }}
                />
            </label>

            <label className="UserFormInput">
                <h6>date: </h6>
                <input
                    placeholder="date"
                    type="date"
                    onChange={(e) => {
                        const date = e.target.value;
                        setValue({
                            ...value,
                            date,
                        });
                    }}
                />
            </label>

            <label className="UserFormInput">
                <h6>About: </h6>
                <textarea
                    required={true}
                    placeholder="about"
                    value={about}
                    onChange={(e) => {
                        const about = e.target.value;
                        setValue({
                            ...value,
                            about,
                        });
                    }}
                />
            </label>
        </div>
    );
};
