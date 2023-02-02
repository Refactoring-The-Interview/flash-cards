import { Form } from "react-bootstrap";
import { Tags } from "../../../Apis/types";

interface TagsProps {
    value: Tags[];
    setValue(value: Tags[]): void;
}

export const TagsSelect = ({ value, setValue }: TagsProps) => {
    const tagsArr = Object.keys(Tags) as Array<keyof typeof Tags>;
    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor="tagsInput">Tags</Form.Label>
            {tagsArr.map((tagKey) => {
                if (tagKey === "js") return null;

                return (
                    <Form.Check
                        type="checkbox"
                        style={{ textTransform: "capitalize" }}
                        value={Tags[tagKey]}
                        label={Tags[tagKey]}
                        onChange={(event) => {
                            const selectedValue = event.target.value as Tags;

                            if (value.includes(selectedValue)) {
                                const index = value.findIndex(
                                    (val) => val === selectedValue
                                );
                                const newValue = [...value];
                                newValue.splice(index, 1);
                                setValue(newValue);
                            } else {
                                setValue([...value, selectedValue] as Tags[]);
                            }
                        }}
                    />
                );
            })}
        </Form.Group>
    );
};
