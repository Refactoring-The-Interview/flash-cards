import { Form, FormGroup } from "react-bootstrap";
import { Tags } from "../../../Apis/types";
import { ChangeEvent } from "react";

interface TagsProps {
    value: Tags[];
    setValue(value: Tags[]): void;
}

export const TagsSelect = ({ value, setValue }: TagsProps) => {
    return (
        <FormGroup className="tags">
            <Form.Label htmlFor="tagsInput">Tags</Form.Label>
            <Form.Select
                className="inputArea form-control"
                id="tagsInput"
                multiple
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                    const selectedValue = event.target.value;
                    setValue([...value, selectedValue] as Tags[]);
                }}
            >
                <option value={Tags.array}>array</option>
                <option value={Tags.obj}>object</option>
            </Form.Select>
        </FormGroup>
    );
};
