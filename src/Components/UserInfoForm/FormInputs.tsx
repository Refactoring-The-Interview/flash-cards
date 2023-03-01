import { FormInput } from "./FormInput";
import { UserProps } from "./types";

interface Props {
    value: UserProps;
    setValue(value: UserProps): void;
}

export const FormInputs = ({ value, setValue }: Props) => {
    const { email, password, date, numbers } = value;
    return (
        <form
            onClick={(e) => {
                e.preventDefault();
                console.log(value);
            }}
        >
            <FormInput
                value={email}
                setValue={(email) => {
                    setValue({
                        ...value,
                        email,
                    });
                }}
                title={"Email: "}
            />
            <FormInput
                value={password}
                setValue={(password) => {
                    setValue({
                        ...value,
                        password,
                    });
                }}
                title={"Password: "}
            />

            <FormInput
                value={date}
                type="date"
                setValue={(date) => {
                    setValue({
                        ...value,
                        date,
                    });
                }}
                title={"Date: "}
            />

            <FormInput
                value={numbers}
                setValue={(numbers) => {
                    setValue({
                        ...value,
                        numbers,
                    });
                }}
                title={"Numbers: "}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
