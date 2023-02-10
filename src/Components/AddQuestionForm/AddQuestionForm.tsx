import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { FormInput } from "./FromInput/FormInput";
import { Difficulty, Question } from "../../Apis/types";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { FormTextArea } from "./FormTextArea/FormTextArea";
import { QuestionFormAnswers } from "./QuestionFormAnswers/QuestionFormAnswers";
import { DifficultySelect } from "../QuestionList/QuestionFilter/DifficultySelect/DifficultySelect";
import { TagsSelect } from "./TagsSelect/TagsSelect";

interface Props {
    variantButton: string;
}

export const AddQuestionForm = ({ variantButton }: Props) => {
    const { questions, addQuestion } = useContext(MyQuestionContext);
    const questionDefaults: Question = {
        difficulty: Difficulty.none,
        question: "",
        answer: "",
        answers: ["", "", ""],
        tags: [],
        correct: false,
        id: questions.length.toString(),
    };

    const [newQuestion, setNewQuestion] = useState<Question>(questionDefaults);
    const { question, answer, answers, tags, difficulty } = newQuestion;
    return (
        <>
            <ConfirmButton
                variant={"primary"}
                onConfirm={() => {
                    addQuestion(newQuestion);
                }}
                modalTitle={"Add Question Form"}
                modalBody={
                    <Form>
                        <DifficultySelect
                            value={difficulty}
                            title={"Difficulty"}
                            setValue={(difficulty) => {
                                setNewQuestion({
                                    ...newQuestion,
                                    difficulty,
                                });
                            }}
                        />
                        <FormTextArea
                            value={question}
                            setValue={(question) => {
                                setNewQuestion({
                                    ...newQuestion,
                                    question,
                                });
                            }}
                            title={"Question"}
                        ></FormTextArea>

                        <QuestionFormAnswers
                            value={answers}
                            setValue={(answers) => {
                                setNewQuestion({
                                    ...newQuestion,
                                    answers,
                                });
                            }}
                        />
                        <FormInput
                            value={answer}
                            setValue={(answer) => {
                                setNewQuestion({
                                    ...newQuestion,
                                    answer,
                                });
                            }}
                            title={"Correct Answer"}
                        ></FormInput>

                        <TagsSelect
                            value={tags}
                            setValue={(tags) => {
                                setNewQuestion({
                                    ...newQuestion,
                                    tags,
                                });
                            }}
                        />
                    </Form>
                }
            >
                Add Question
            </ConfirmButton>
        </>
    );
};
