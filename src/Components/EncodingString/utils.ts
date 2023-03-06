export const encode = (string: string) => {
    let result = "";
    let run = 0;
    let char = string[0];

    for (let i = 0; i < string.length; i += 1) {
        if (string[i] === char) {
            if (run === 9) {
                result += `${run}${char}`;
                run = 0;
            }
            run += 1;
        }

        if (string[i] !== char) {
            result += `${run}${char}`;
            char = string[i];
            run = 1;
        }

        if (i === string.length - 1) {
            result += `${run}${char}`;
        }
    }

    return result;
};
