import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { Question, useNewQuestionDefault } from "../../Apis/types";
import { MyQuestionContext } from "../Context/QuestionContext";
import { QuestionFormBody } from "./QuestionFormBody/QuestionFormBody";

interface Props {
    variantButton: string;
}

export const AddQuestionForm = ({ variantButton }: Props) => {
    const { addQuestion } = useContext(MyQuestionContext);
    let questionDefaults = useNewQuestionDefault();
    const [newQuestion, setNewQuestion] = useState<Question>(questionDefaults);

    return (
        <ConfirmButton
            variant={"primary"}
            onConfirm={() => {
                addQuestion(newQuestion);
            }}
            modalTitle={"Add Question Form"}
            modalBody={
                <Form>
                    <QuestionFormBody
                        value={newQuestion}
                        setValue={setNewQuestion}
                    />
                </Form>
            }
        >
            Add Question
        </ConfirmButton>
    );
};
