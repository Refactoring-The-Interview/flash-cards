import { useContext, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { MyQuestionContext } from "../Context/QuestionContext";
import { Paths, Question } from "../../Apis/types";
import { Button, FormLabel } from "react-bootstrap";
import { Loading } from "../Loading/Loading";
import { QuestionFormBody } from "../AddQuestionForm/QuestionFormBody/QuestionFormBody";

export const QuestionEdit = () => {
    const { questionId } = useParams();
    const { questions, updateQuestion } = useContext(MyQuestionContext);
    const navigate = useNavigate();
    const [questionEditValues, setQuestionEditValues] = useState<
        Question | undefined
    >(questions?.find(({ id }) => id === questionId));

    if (!questionEditValues) {
        return <Loading />;
    }

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                let questionIndex;
                let findIndex = questions?.find(({ id }, index) => {
                    if (id === questionId) questionIndex = index;
                })?.id;

                if (questionIndex !== undefined) {
                    questions[questionIndex] = questionEditValues;

                    updateQuestion(questions);
                }
                navigate(Paths.questionList);
            }}
        >
            <FormLabel>
                <h1>Question Edit</h1>
            </FormLabel>
            <QuestionFormBody
                value={questionEditValues}
                setValue={setQuestionEditValues}
            />

            <Button
                onClick={() => {
                    navigate(Paths.questionList);
                }}
            >
                Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
        </Form>
    );
};
