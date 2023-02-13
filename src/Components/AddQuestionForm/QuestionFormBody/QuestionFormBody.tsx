import { Question } from "../../../Apis/types";
import { DifficultySelect } from "../../QuestionList/QuestionFilter/DifficultySelect/DifficultySelect";
import { FormTextArea } from "../FormTextArea/FormTextArea";
import { FormInput } from "../FromInput/FormInput";
import { QuestionFormAnswers } from "../QuestionFormAnswers/QuestionFormAnswers";
import { TagsSelect } from "../TagsSelect/TagsSelect";

interface Props {
    value: Question;
    setValue(value: Question): void;
}

export const QuestionFormBody = ({ value, setValue }: Props) => {
    const { difficulty, question, answers, answer, tags } = value;
    return (
        <div>
            <DifficultySelect
                value={difficulty}
                title={"Difficulty"}
                setValue={(difficulty) => {
                    setValue({
                        ...value,
                        difficulty,
                    });
                }}
            />
            <FormTextArea
                value={question}
                setValue={(question) => {
                    setValue({
                        ...value,
                        question,
                    });
                }}
                title={"Question"}
            ></FormTextArea>

            <QuestionFormAnswers
                value={answers}
                setValue={(answers) => {
                    setValue({
                        ...value,
                        answers,
                    });
                }}
            />
            <FormInput
                value={answer}
                setValue={(answer) => {
                    setValue({
                        ...value,
                        answer,
                    });
                }}
                title={"Correct Answer"}
            ></FormInput>

            <TagsSelect
                value={tags}
                setValue={(tags) => {
                    setValue({
                        ...value,
                        tags,
                    });
                }}
            />
        </div>
    );
};
