import { Button, Form, FormGroup, ToggleButton } from "react-bootstrap";
import { Tags } from "../../../Apis/types";
import { ChangeEvent, useState } from "react";
import { FormInput } from "../FromInput/FormInput";

interface TagsProps {
    value: Tags[];
    setValue(value: Tags[]): void;
}

export const TagsSelect = ({ value, setValue }: TagsProps) => {
    return (
        <FormGroup className="tags">
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
        </FormGroup>
    );
};
