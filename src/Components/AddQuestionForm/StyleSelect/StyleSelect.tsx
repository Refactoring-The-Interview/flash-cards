import { Form } from "react-bootstrap";
import { FlashCardStyle } from "../../../Apis/types";

interface Props {
    value: number;
    setValue(value: number): void;
}

export const StyleSelect = ({ value, setValue }: Props) => {
    return (
        <Form.Group>
            <Form.Select
                onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setValue(value);
                }}
            >
                <option value={FlashCardStyle.MultipleChoice}>
                    Multiple Choice Questions
                </option>
                <option value={FlashCardStyle.CodeBlock}>Code Block</option>
            </Form.Select>
        </Form.Group>
    );
};
