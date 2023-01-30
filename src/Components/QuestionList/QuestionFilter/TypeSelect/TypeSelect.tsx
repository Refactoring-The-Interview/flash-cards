import { Form } from "react-bootstrap";
import { Tags } from "../../../../Apis/types";

interface TypeProps {
    value: Tags;
    setValue(tag: Tags): void;
}

export const TypeSelect = ({ value, setValue }: TypeProps) => {
    return (
        <Form.Group className="mb-2">
            <Form.Select
                className="select-bar"
                aria-label="Default select example"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value as Tags);
                }}
            >
                <option value="Js">Type</option>
                <option value="array">Array</option>
                <option value="object">Objects</option>
            </Form.Select>
        </Form.Group>
    );
};
