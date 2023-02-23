import { newFormInputs } from "./types";
import { InputArea } from "./InputArea";
import { InputTextArea } from "./InputTextArea";

interface Props {
    value: newFormInputs;
    setValue(value: newFormInputs): void;
}

export const NewFormBody = ({ value, setValue }: Props) => {
    const { email, password, age, about } = value;

    return (
        <>
            <InputArea
                value={email}
                setValue={(email) => {
                    setValue({
                        ...value,
                        email,
                    });
                }}
                title={"email"}
            />
            <InputArea
                value={password}
                setValue={(password) => {
                    setValue({
                        ...value,
                        password,
                    });
                }}
                title={"password"}
            />
            <InputArea
                value={age}
                type="number"
                setValue={(age) => {
                    setValue({
                        ...value,
                        age,
                    });
                }}
                title={"age"}
            />
            <InputTextArea
                value={about}
                setValue={(about) => {
                    setValue({
                        ...value,
                        about,
                    });
                }}
                title={"About"}
            />
        </>
    );
};
