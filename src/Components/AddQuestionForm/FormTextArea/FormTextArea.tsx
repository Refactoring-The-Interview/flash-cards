import { Form, FormGroup } from "react-bootstrap";

interface TextAreaProps {
    value: string;
    setValue(value: string): void;
    title: string;
}

export const FormTextArea = ({ value, setValue, title }: TextAreaProps) => {
    return (
        <FormGroup>
            <Form.Label htmlFor="textArea">{title}</Form.Label>

            <textarea
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                className="inputArea form-control"
                id="textArea"
                value={value}
                placeholder={title}
            ></textarea>
        </FormGroup>
    );
};
