import { Form, FormGroup } from "react-bootstrap";
import { CodeIDE } from "../../CodeIDE/CodeIDE";

interface TextAreaProps {
    value: string;
    setValue(value: string): void;
    title: string;
    style: number;
}

export const FormTextArea = ({
    value,
    setValue,
    title,
    style,
}: TextAreaProps) => {
    return (
        <FormGroup>
            <Form.Label htmlFor="textArea">{title} </Form.Label>

            {style === 0 ? (
                <textarea
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    className="inputArea form-control"
                    id="textArea"
                    value={value}
                    placeholder={title}
                ></textarea>
            ) : (
                <CodeIDE
                    value={value}
                    setValue={(userInput) => {
                        setValue(userInput);
                    }}
                />
            )}
        </FormGroup>
    );
};
