import { useContext } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useRandomQuestion } from "../Utils/useRandomQuestion";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Loader } from "@aws-amplify/ui-react";
import { Question } from "../../Apis/types";
import { DeleteQuestionButton } from "../DeleteQuestionButton/DeleteQuestionButtton";

const getQuestions = (
    questions: Question[],
    questionId: string | undefined
): Question | undefined => {
    return questions?.find(({ id }) => id === questionId);
};

const FlashCard = () => {
    const { questionId } = useParams();
    // TODO add next question functionality
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const randomQuestion = useRandomQuestion();
    const { questions } = useContext(MyQuestionContext);

    let currentQuestion = getQuestions(questions, questionId);

    if (!currentQuestion) {
        return (
            <h2>
                <Loader />
            </h2>
        );
    } else {
        return (
            <Card>
                <div className="FlashCardHeader">
                    <Card.Header className="cardHeader">
                        <div className="FlashCardHeader-timer">
                            <Timer />
                        </div>

                        <CardGroup className="FlashCardHeader-buttons">
                            <Button type="button" variant="secondary">
                                Submit
                            </Button>
                        </CardGroup>
                    </Card.Header>
                </div>

                <ArrayMethods cardQuestion={currentQuestion} />
                <div className="FlashCardFooter">
                    <Card.Footer className="cardFooter">
                        <DeleteQuestionButton question={currentQuestion} />

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={(e) => {}}
                        >
                            Next Question
                        </Button>
                    </Card.Footer>
                </div>
            </Card>
        );
    }
};

export default FlashCard;
