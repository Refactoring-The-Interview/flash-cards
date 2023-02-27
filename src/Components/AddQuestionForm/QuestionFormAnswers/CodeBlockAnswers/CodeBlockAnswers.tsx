import { useState } from "react";
import { CodeIDE } from "../../../CodeIDE/CodeIDE";
import { Form, FormGroup } from "react-bootstrap";

interface Props {
    value: string[];
    setValue(value: string[]): void;
}

export const CodeBlockAnswers = ({ value, setValue }: Props) => {
    const [codeBlock, setCodeBlock] = useState<string>("");
    return (
        <FormGroup
            onChange={() => {
                setValue([codeBlock]);
            }}
        >
            <Form.Label>JS code Solution</Form.Label>
            <CodeIDE
                value={codeBlock}
                setValue={(userInput) => {
                    setCodeBlock(userInput);
                }}
            />
        </FormGroup>
    );
};
