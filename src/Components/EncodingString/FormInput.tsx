interface Props {
    value: string;
    setValue(value: string): void;
}

export const FormInput = ({ value, setValue }: Props) => {
    return (
        <label>
            <h4>String To Encode</h4>
            <input
                value={value}
                placeholder="String"
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                }}
            />
        </label>
    );
};
