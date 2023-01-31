import { ChangeEvent } from "react";
import { Form, FormGroup } from "react-bootstrap";

interface FormProps {
    value: string;
    setValue(value: string): void;
    title: string;
}

export const FormInput = ({ value, setValue, title }: FormProps) => {
    return (
        <FormGroup>
            <Form.Label htmlFor="formInput">{title}</Form.Label>
            <input
                className="inputArea form-control"
                id="formInput"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = event.target.value;
                    setValue(value);
                }}
                value={value}
                placeholder={title}
            ></input>
        </FormGroup>
    );
};
