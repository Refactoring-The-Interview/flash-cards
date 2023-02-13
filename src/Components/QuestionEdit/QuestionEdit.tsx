import { useContext, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Paths, Question } from "../../Apis/types";
import { Button, FormLabel } from "react-bootstrap";
import { Loading } from "../Loading/Loading";
import { DifficultySelect } from "../QuestionList/QuestionFilter/DifficultySelect/DifficultySelect";
import { FormTextArea } from "../AddQuestionForm/FormTextArea/FormTextArea";
import { QuestionFormAnswers } from "../AddQuestionForm/QuestionFormAnswers/QuestionFormAnswers";
import { FormInput } from "../AddQuestionForm/FromInput/FormInput";
import { TagsSelect } from "../AddQuestionForm/TagsSelect/TagsSelect";
import { QuestionFormBody } from "../AddQuestionForm/QuestionFormBody/QuestionFormBody";

export const QuestionEdit = () => {
    const { questionId } = useParams();
    const { questions, addQuestion } = useContext(MyQuestionContext);
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
                addQuestion(questionEditValues);
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
