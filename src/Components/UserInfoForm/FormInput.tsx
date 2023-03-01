interface Props {
    value: any;
    setValue(value: any): void;
    title: string;
    type?: string;
}

export const FormInput = ({ value, setValue, title, type = "text" }: Props) => {
    return (
        <label>
            <h5>{title}</h5>
            <input
                type={type}
                value={value}
                onChange={(e) => {
                    const input = e.target.value;
                    setValue(input);
                }}
            />
        </label>
    );
};
