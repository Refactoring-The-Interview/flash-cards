interface Props {
    value: string;
    setValue(value: string): void;
    title: string;
}

export const InputTextArea = ({ value, setValue, title }: Props) => {
    return (
        <label>
            <h6>{title}</h6>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};
