import { UserProps } from "./types";

const validateEmail = (email: string) => {
    return email.indexOf("@") > 3 && email.indexOf(".") === email.length - 3;
};

const validatePassword = (pass: string) => {
    return pass.length > 8;
};

export const validate = (value: UserProps) => {
    const { email, password, date, numbers } = value;

    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);

    return validEmail && validEmail;
};
