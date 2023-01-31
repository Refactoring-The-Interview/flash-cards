import { Form } from "react-bootstrap";
import { Tags } from "../../../Apis/types";

interface TagsProps {
    value: Tags[];
    setValue(value: Tags[]): void;
}

export const TagsSelect = ({ value, setValue }: TagsProps) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor="tagsInput">Tags</Form.Label>
            <Form.Check
                type="checkbox"
                value={Tags.array}
                label="Array"
                onChange={(event) => {
                    const selectedValue = event.target.value;
                    setValue([...value, selectedValue] as Tags[]);
                }}
            />
            <Form.Check
                type="checkbox"
                value={Tags.obj}
                label="Object"
                onChange={(event) => {
                    const selectedValue = event.target.value;
                    setValue([...value, selectedValue] as Tags[]);
                }}
            />
        </Form.Group>
    );
};
