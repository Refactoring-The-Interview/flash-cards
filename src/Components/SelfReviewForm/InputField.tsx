import "./InputFieldS.scss";

interface Props {
    value: any;
    setValue(value: any): void;
    title: string;
    type?: string;
}

export const InputField = ({
    value,
    setValue,
    title,
    type = "text",
}: Props) => {
    return (
        <label className="InputField">
            <h6>{title}</h6>
            <input
                className="InputField-input"
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};
