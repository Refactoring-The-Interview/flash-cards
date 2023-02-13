import { useContext, useState } from "react";
import {
    Badge,
    Button,
    ButtonGroup,
    Form,
    FormLabel,
    ListGroup,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Paths, Question } from "../../Apis/types";
import { QuestionFormBody } from "../AddQuestionForm/QuestionFormBody/QuestionFormBody";
import { Loading } from "../Loading/Loading";

export const QuestionEdit = () => {
    const { questionId } = useParams();
    const { questions, addQuestion } = useContext(MyQuestionContext);
    const [selectedQuestion, setSelectedQuestion] = useState<
        Question | undefined
    >(questions?.find(({ id }) => id === questionId));
    const navigate = useNavigate();

    if (!selectedQuestion) {
        return <Loading />;
    }

    return (
        <Form
            onSubmit={() => {
                addQuestion(selectedQuestion);
            }}
        >
            <ListGroup>
                <ListGroup.Item>
                    <FormLabel active>
                        <Badge pill>
                            <h1>Question Edit From</h1>
                        </Badge>
                    </FormLabel>
                </ListGroup.Item>
                <ListGroup.Item>
                    <QuestionFormBody
                        value={selectedQuestion}
                        setValue={setSelectedQuestion}
                    />
                </ListGroup.Item>
                <ListGroup.Item>
                    <ButtonGroup>
                        <Button variant="outline-primary" type="submit">
                            Save
                        </Button>
                        <Button
                            variant="outline-primary"
                            onClick={() => {
                                navigate(Paths.questionList);
                            }}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </ListGroup.Item>
            </ListGroup>
        </Form>
    );
};
