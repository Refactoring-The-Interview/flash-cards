import { Button } from "react-bootstrap";
import {
    Difficulty,
    Paths,
    Question,
    pathGenerator,
} from "../../../Apis/types";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import { DeleteButton } from "./DeleteButton/DeleteButton";

interface Props {
    questions: Question[];
    showDelete: boolean;
}

export const QuestionCards = ({ questions, showDelete }: Props) => {
    const navigate = useNavigate();
    let easyArr = [] as Question[];
    let medArr = [] as Question[];
    let hardArr = [] as Question[];
    let noneArr = [] as Question[];

    questions.forEach((item: Question, index: number) => {
        if (item.difficulty === Difficulty.easy) {
            easyArr.push(item);
        } else if (item.difficulty === Difficulty.medium) {
            medArr.push(item);
        } else if (item.difficulty === Difficulty.hard) {
            hardArr.push(item);
        } else if (item.difficulty === Difficulty.none) {
            noneArr.push(item);
        }
    });
    questions = easyArr.concat(medArr.concat(hardArr.concat(noneArr)));
    return (
        <div>
            {questions.map((question: Question, index: number) => {
                const deleteBtn = showDelete ? (
                    <DeleteButton question={question} />
                ) : null;

                const path = pathGenerator[Paths.question](question.id);
                return (
                    <Button
                        variant="light"
                        className="listBtn"
                        onClick={() => {
                            navigate(path);
                        }}
                    >
                        {deleteBtn}
                        <QuestionCard question={question} />
                    </Button>
                );
            })}
        </div>
    );
};
