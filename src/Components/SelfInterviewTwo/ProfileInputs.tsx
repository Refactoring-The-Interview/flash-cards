import { FieldProps } from "./types";

interface Props {
    setFormFieldInputs(formFieldInputs: FieldProps): void;
    formFieldInputs: FieldProps;
}

export const ProfileInputs = ({
    setFormFieldInputs,
    formFieldInputs,
}: Props) => {
    const { name, age, DOB, description } = formFieldInputs;

    return (
        <>
            <label>
                Enter Name:
                <input
                    value={name}
                    onChange={(e) => {
                        const name = e.target.value;
                        setFormFieldInputs({
                            ...formFieldInputs,
                            name,
                        });
                    }}
                />
            </label>

            <label>
                Enter Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => {
                        const age = parseInt(e.target.value);
                        console.log(typeof age);
                        setFormFieldInputs({
                            ...formFieldInputs,
                            age,
                        });
                    }}
                />
            </label>

            <label>
                Enter Date of Birth
                <input
                    type="date"
                    value={DOB}
                    onChange={(e) => {
                        const DOB = e.target.value;
                        console.log(typeof DOB);
                        setFormFieldInputs({
                            ...formFieldInputs,
                            DOB,
                        });
                    }}
                />
            </label>

            <label>
                About:
                <textarea
                    required={true}
                    value={description}
                    onChange={(e) => {
                        const description = e.target.value;
                        setFormFieldInputs({
                            ...formFieldInputs,
                            description,
                        });
                    }}
                />
            </label>
        </>
    );
};
