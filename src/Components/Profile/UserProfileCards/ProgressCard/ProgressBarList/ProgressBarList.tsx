import { ListGroup } from "react-bootstrap";
import { Difficulty, DifficultyColor } from "../../../../../Apis/types";
import { ProgressBars } from "../../../../QuestionList/ProgressBars/ProgressBars";

export const ProgressBarList = () => {
    const difficulties = Object.values(Difficulty);

    return (
        <ListGroup>
            {difficulties.map((difficulty, index) => {
                return (
                    <ListGroup.Item>
                        {difficulty === Difficulty.none
                            ? "Over All Progress"
                            : difficulty}
                        <ProgressBars
                            difficulty={difficulty}
                            variant={
                                difficulty === Difficulty.none
                                    ? "primary"
                                    : DifficultyColor[difficulty]
                            }
                        />
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};
