// email should have @ and .
// password should have an upercase, lower and symbol
// about should be length of 6 chars or greater and be reversed

import { UserDataProps } from "./types";

const emailAuth = (email: string) => {
    const emailAt = email.indexOf("@");
    const emailDot = email.indexOf(".");
    return emailAt >= 3 && emailDot > emailAt;
};

const passwordAuth = (pass: string) => {
    let upercase = false;
    let lower = false;
    let symbol = false;

    for (let i = 0; i < pass.length; i += 1) {
        let char = pass.charCodeAt(i);

        if (char >= 97 && char <= 122) lower = true;
        if (char >= 65 && char <= 90) upercase = true;
        if (char >= 63 && char <= 64) symbol = true;
        if (char >= 33 && char <= 38) symbol = true;
    }
    return upercase && lower && symbol;
};

const aboutRevers = (about: string) => {
    let result = "";

    for (let i = about.length; i > 0; i -= 1) {
        result += about[i];
    }
    return result;
};

export const UserAuths = (user: UserDataProps) => {
    const { email, password, about } = user;
    const emailVal = emailAuth(email);
    const passwordVal = passwordAuth(password);
    user.about = aboutRevers(about);

    if (emailVal && passwordVal) return user;
    return "invalid user";
};
