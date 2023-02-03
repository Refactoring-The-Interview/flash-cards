import Form from "react-bootstrap/Form";
import "../QuestionFiltersS.scss";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { Difficulty } from "../../../../Apis/types";

interface DifficultyProps {
    value: Difficulty;
    setValue(difficulty: Difficulty): void;
}

export const DifficultySelect = ({ value, setValue }: DifficultyProps) => {
    const [radioValue, setRadioValue] = useState("1");

    const Difficulties = Object.values(Difficulty);
    Difficulties.splice(Difficulties.length - 1, 1);

    return (
        <Form.Group className="mb-2">
            <ButtonGroup>
                {Difficulties.map((difficulty, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={difficulty}
                        checked={radioValue === difficulty}
                        onChange={(e) => {
                            const value = e.target.value as Difficulty;
                            if (Object.values(Difficulty).includes(value)) {
                                setValue(value);
                            } else {
                                console.error("Non-difficulty value selected");
                            }

                            setRadioValue(e.currentTarget.value);
                        }}
                    >
                        {difficulty}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </Form.Group>
    );
};
