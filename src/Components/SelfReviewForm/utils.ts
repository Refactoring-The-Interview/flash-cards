interface emailAuthProps {
    email: string;
}

export const emailAuth = ({ email }: emailAuthProps) => {
    const emailArr = email;
    const emailAt =
        emailArr.split("").slice(0, emailArr.indexOf("@")).length >= 3;

    return emailAt;
};

export const passwordAuth = (password: string) => {
    const currentPass = /^[a-zA-Z0-9_]{6,18}$/;
    return currentPass.test(password);
};
