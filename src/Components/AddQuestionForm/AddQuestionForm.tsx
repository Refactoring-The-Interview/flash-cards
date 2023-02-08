import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { FormInput } from "./FromInput/FormInput";
import { Difficulty, Question } from "../../Apis/types";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";

interface Props {
    variantButton: string;
}

export const AddQuestionForm = ({ variantButton }: Props) => {
    const { questions } = useContext(MyQuestionContext);
    const newQuestion = useState<Question>({
        difficulty: Difficulty.none,
        question: "",
        answer: "",
        answers: [],
        tags: [],
        correct: false,
        id: questions.length.toString(),
    });

    return (
        <>
            <ConfirmButton
                variant={"danger"}
                onConfirm={function (): void {
                    throw new Error("Function not implemented.");
                }}
                children={<>Add Question</>}
                modalBody={
                    <Form>
                        <FormInput
                            value={""}
                            setValue={function (value: string): void {
                                throw new Error("Function not implemented.");
                            }}
                            title={""}
                        ></FormInput>
                    </Form>
                }
            ></ConfirmButton>
        </>
    );
};
