// 1. Name - No numbers
// 2. Age - Only numbers
// 3. DOB - Must be valid date in the past
// 4. Description - Required field, no limitation other than must be required

import { FeatureType } from "@aws-amplify/predictions";
import { useState } from "react";
import { ProfileInputs } from "./ProfileInputs";
import { FieldProps } from "./types";
import { valName } from "./utils";

export const ProfileForm = () => {
    const [formFieldInputs, setFormFieldInputs] = useState<FieldProps>({
        name: "",
        age: 0,
        DOB: new Date(),
        description: "",
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!valName(formFieldInputs.name))
                    console.log("ERROR NAME SHOULD NOT CONTAIN INTEGERS");
                else console.log("all felids pass validation! ");
            }}
        >
            <ProfileInputs
                setFormFieldInputs={setFormFieldInputs}
                formFieldInputs={formFieldInputs}
            />
            <button>Submit From</button>
        </form>
    );
};
