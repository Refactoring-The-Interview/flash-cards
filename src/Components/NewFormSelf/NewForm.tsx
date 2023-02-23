import { useState } from "react";
import { NewFormBody } from "./NewFormBody";
import { newFormInputs } from "./types";
import { validationEmail, validationPassword } from "./utils";

export const NewFormSelf = () => {
    const [newFromInputs, setNewFormInputs] = useState<newFormInputs>({
        email: "",
        password: "",
        age: 0,
        about: "",
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const { email, password } = newFromInputs;
                if (
                    validationEmail({ email }) &&
                    validationPassword({ password })
                )
                    console.log("thanks for the info");
                else {
                    console.log("error looks like filed was incorrect");
                }
            }}
        >
            <NewFormBody value={newFromInputs} setValue={setNewFormInputs} />
            <button> submit </button>
        </form>
    );
};
