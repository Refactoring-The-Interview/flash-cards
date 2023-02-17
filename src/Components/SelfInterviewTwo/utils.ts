import { type } from "os";

export const valName = (name: string) => {
    for (let i = 0; i < name.length; i += 1) {
        if (!Number.isNaN(parseInt(name[i]))) {
            return false;
        }
    }
    return true;
};
