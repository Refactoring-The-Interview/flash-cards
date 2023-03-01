import "./FormInputS.scss";

interface Props {
    value: string[];
    setValue(value: string[]): void;
}

export const FormInput = ({ value, setValue }: Props) => {
    return (
        <label className="FormInput">
            <input
                value={value}
                placeholder="Enter Sequence separate with comma"
                onChange={(e) => {
                    const sequence = e.target.value
                        .replace(/\s/g, "")
                        .split(",");
                    setValue(sequence);
                }}
            />
        </label>
    );
};
