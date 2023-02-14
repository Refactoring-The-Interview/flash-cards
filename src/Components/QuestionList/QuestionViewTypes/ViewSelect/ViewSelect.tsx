import { Form } from "react-bootstrap";

interface Props {
    setValue(value: number): void;
}

export const ViewSelect = ({ setValue }: Props) => {
    return (
        <Form.Select
            onChange={(e) => {
                const view = parseInt(e.target.value);
                setValue(view);
            }}
        >
            <option value={1}>Cards</option>
            <option value={2}>Table</option>
        </Form.Select>
    );
};
