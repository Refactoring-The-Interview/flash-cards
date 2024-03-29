import { Form } from "react-bootstrap";
import { Tags } from "../../../../Apis/types";
import { ChangeEvent } from "react";

interface TypeProps {
    value: Tags | undefined;
    setValue(type: Tags | undefined): void;
}

export const TypeSelect = ({ value, setValue }: TypeProps) => {
    return (
        <Form.Group className="mb-2">
            <Form.Select
                className="select-bar"
                aria-label="Default select example"
                value={value}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                    const value = event.target.value as Tags;

                    if (Object.values(Tags).includes(value)) {
                        setValue(value);
                    } else {
                        console.error("Non-Type value selected");
                    }
                }}
            >
                <option value={Tags.js}>Type</option>
                <option value={Tags.array}>Array</option>
                <option value={Tags.obj}>Objects</option>
                <option value={Tags.codeblock}>Code Challenges</option>
            </Form.Select>
        </Form.Group>
    );
};
