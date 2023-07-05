interface Props {
    value: string;
    setValue(value: string): void;
}

export const SemordnilapInput = ({ value, setValue }: Props) => {
    return (
        <textarea
            value={value}
            onChange={(e) => {
                const inputValue = e.target.value;
                setValue(inputValue);
            }}
        />
    );
};
