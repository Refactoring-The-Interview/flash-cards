import { Button } from "react-bootstrap";
import { Paths, Question, pathGenerator } from "../../../Apis/types";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { SortQuestions } from "../../Utils/Utils";
import { useNavigate } from "react-router-dom";

interface Props {
    questions: Question[];
    showDelete: boolean;
}

export const QuestionCards = ({ questions, showDelete }: Props) => {
    const navigate = useNavigate();

    const sortKey = {
        easy: 0,
        medium: 1,
        hard: 2,
        "": 3,
    };

    questions = SortQuestions({ questions, sortKey });

    return (
        <div className="QuestionCard">
            {questions.map((question: Question, index: number) => {
                const path = pathGenerator[Paths.question](question.id);
                return (
                    <Button
                        variant="light"
                        className="listBtn"
                        onClick={() => {
                            if (!showDelete) {
                                navigate(path);
                            }
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
