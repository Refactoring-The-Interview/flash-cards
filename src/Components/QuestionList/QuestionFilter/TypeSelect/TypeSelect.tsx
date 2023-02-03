import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { Tags } from "../../../../Apis/types";
import { ChangeEvent, useState } from "react";

interface TypeProps {
    value: Tags | undefined;
    setValue(type: Tags | undefined): void;
}

export const TypeSelect = ({ value, setValue }: TypeProps) => {
    const [radioValue, setRadioValue] = useState("1");

    const tags = Object.values(Tags);

    return (
        <Form.Group className="mb-2">
            <ButtonGroup>
                {tags.map((tag, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={tag}
                        checked={radioValue === tag}
                        onChange={(e) => {
                            const value = e.target.value as Tags;

                            if (Object.values(Tags).includes(value)) {
                                setValue(value);
                            } else {
                                console.error("Non-Type value selected");
                            }

                            setRadioValue(e.currentTarget.value);
                        }}
                    >
                        {tag}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </Form.Group>
    );
};
