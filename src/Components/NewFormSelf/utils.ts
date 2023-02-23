import { indexOf } from "lodash";

interface Props {
    email: string;
}

export const validationEmail = ({ email }: Props) => {
    let emailAt = email.split("@").length + 1 >= 3;
    let emailDot = email.slice(email.indexOf("."), email.length).length >= 3;

    return emailAt && emailDot;
};

interface passwordProps {
    password: string;
}

export const validationPassword = ({ password }: passwordProps) => {
    return password.length + 1 >= 8;
};
