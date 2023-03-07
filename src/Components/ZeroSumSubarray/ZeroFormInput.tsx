interface Props {
    value: string[];
    setValue(value: string[]): void;
    title: string;
    type: string;
}

export const ZeroFormInput = ({ value, setValue, type, title }: Props) => {
    return (
        <label>
            <h6>{title}</h6>
            <input
                type={type}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue([inputValue]);
                }}
            />
        </label>
    );
};
