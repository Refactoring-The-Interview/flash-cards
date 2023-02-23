import { InputField } from "./InputField";
import { userFields } from "./types";
import "./UserFromInputFieldsS.scss";

interface Props {
    value: userFields;
    setValue(value: any): void;
}

export const UserFromInputFields = ({ value, setValue }: Props) => {
    const { email, password, date, safetyQuestions } = value;
    return (
        <div className="UserFromInputFields">
            <InputField
                value={email}
                setValue={(email) => {
                    setValue({
                        ...value,
                        email,
                    });
                }}
                title={"email"}
            />

            <InputField
                value={password}
                setValue={(password) => {
                    setValue({
                        ...value,
                        password,
                    });
                }}
                title={"password"}
            />

            <InputField
                value={date}
                setValue={(date) => {
                    setValue({
                        ...value,
                        date,
                    });
                }}
                title={"date"}
                type="date"
            />

            <InputField
                value={safetyQuestions}
                setValue={(safetyQuestions) => {
                    setValue({
                        ...value,
                        safetyQuestions,
                    });
                }}
                title={"safetyQuestion"}
            />
        </div>
    );
};
