import Button from "react-bootstrap/Button";
import "./QuestionCardsS.scss";
import { useNavigate } from "react-router-dom";
import {
    Difficulty,
    Paths,
    Question,
    pathGenerator,
} from "../../../Apis/types";
import { QuestionCard } from "../QuestionCard/QuestionCard";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
}

export const QuestionCards = ({ currentQuestions, showDelete }: Props) => {
    const navigate = useNavigate();
    const Difficulties = Object.values(Difficulty);
    let sortedCurrentQuestions = [] as Question[];

    Difficulties.forEach((difficulty) => {
        currentQuestions.map((question: Question, index: number) => {
            if (question.difficulty === difficulty) {
                sortedCurrentQuestions.push(question);
            }
        });
    });

    currentQuestions = sortedCurrentQuestions;

    return (
        <div className="QuestionCard">
            {currentQuestions.map((question: Question, index: number) => {
                const path = pathGenerator[Paths.question](question.id);
                return (
                    <Button
                        variant="light"
                        className="listBtn"
                        onClick={(e) => {
                            navigate(path);
                        }}
                    >
                        <QuestionCard
                            question={question}
                            showDelete={showDelete}
                        />
                    </Button>
                );
            })}
        </div>
    );
};
