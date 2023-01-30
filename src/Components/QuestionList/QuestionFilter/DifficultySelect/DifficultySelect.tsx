import Form from "react-bootstrap/Form";
import "../QuestionFiltersS.scss";

import { Difficulty } from "../../../../Apis/types";

interface DifficultyProps {
    value: Difficulty;
    setValue(difficulty: Difficulty): void;
}

export const DifficultySelect = ({ value, setValue }: DifficultyProps) => {
    return (
        <Form.Group className="mb-2">
            <Form.Select
                className="select-bar"
                aria-label="Default select example"
                placeholder="Difficulty"
                value={value}
                onChange={(e) => {
                    const value = e.target.value as Difficulty;
                    if (Object.values(Difficulty).includes(value)) {
                        setValue(value);
                    } else {
                        console.error("Non-difficulty value selected");
                    }
                }}
            >
                <option value={Difficulty.none}>Difficulty</option>
                <option value={Difficulty.easy}>Easy</option>
                <option value={Difficulty.medium}>Medium</option>
                <option value={Difficulty.hard}>Hard</option>
            </Form.Select>
        </Form.Group>
    );
};
