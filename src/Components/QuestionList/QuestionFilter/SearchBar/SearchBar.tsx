import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface SearchProps {
    value: string;
    setValue(term: string): void;
}

export const SearchBar = ({ value, setValue }: SearchProps) => {
    return (
        <Form.Group className="mb-2">
            <Form.Control
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = event.target.value;
                    setValue(value);
                }}
                type="search"
                placeholder="Search"
                value={value}
            />
        </Form.Group>
    );
};
