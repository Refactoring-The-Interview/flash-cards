import { FormInput } from "./FormInput";
import { ValidSubsequenceProps } from "./IsValidSubsequence";
import { validate } from "./utils";
import "./IsValidSubsequenceFormInputsS.scss";

interface Props {
    value: ValidSubsequenceProps;
    setValue(value: ValidSubsequenceProps): void;
    setIsValid(isValid: boolean): void;
}

export const IsValidSubsequenceFormInputs = ({
    value,
    setValue,
    setIsValid,
}: Props) => {
    const { sequence, subSequence } = value;

    return (
        <form
            className="IsValidSubsequenceFormInputs"
            onSubmit={(e) => {
                e.preventDefault();
                setIsValid(validate(sequence, subSequence));
            }}
        >
            <FormInput
                value={sequence}
                setValue={(sequence) => {
                    setValue({
                        ...value,
                        sequence,
                    });
                }}
            />
            <FormInput
                value={subSequence}
                setValue={(subSequence) => {
                    setValue({
                        ...value,
                        subSequence,
                    });
                }}
            />
            <button type="submit"> Validate </button>
        </form>
    );
};
