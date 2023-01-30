import { Button, Form } from "react-bootstrap";

interface CheckBoxProps {
    value: boolean;
    setValue(value: boolean): void;
}

export const Checkbox = ({ value, setValue }: CheckBoxProps) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
                type="checkbox"
                label="Hide Answered"
                onChange={(e) => {
                    setValue(!value);
                }}
            />
        </Form.Group>
    );
};
