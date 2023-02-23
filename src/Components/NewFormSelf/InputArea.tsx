interface Props {
    value: string | number;
    setValue(value: any): void;
    title: string;
    type?: string;
}

export const InputArea = ({ value, setValue, title, type = "text" }: Props) => {
    return (
        <label>
            <h6>{title}</h6>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};
