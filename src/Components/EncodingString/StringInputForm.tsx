import { FormInput } from "./FormInput";

interface Props {
    value: string;
    setValue(value: string): void;
}

export const StringInputForm = ({ value, setValue }: Props) => {
    return (
        <form>
            <FormInput
                value={value}
                setValue={(string) => {
                    setValue(string);
                }}
            />
        </form>
    );
};
