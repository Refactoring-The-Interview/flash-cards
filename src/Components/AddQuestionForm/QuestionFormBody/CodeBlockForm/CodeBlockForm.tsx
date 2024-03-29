import { Question } from "../../../../Apis/types";
import { DifficultySelect } from "../../../QuestionList/QuestionFilter/DifficultySelect/DifficultySelect";
import { FormTextArea } from "../../FormTextArea/FormTextArea";
import { FormInput } from "../../FromInput/FormInput";
import { CodeBlockAnswers } from "../../QuestionFormAnswers/CodeBlockAnswers/CodeBlockAnswers";
import { TagsSelect } from "../../TagsSelect/TagsSelect";

interface Props {
    value: Question;
    setValue(value: Question): void;
}

export const CodeBlockForm = ({ value, setValue }: Props) => {
    const { difficulty, question, answers, tags, style, answer } = value;

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
            <FormInput
                value={answer}
                setValue={(answer) => {
                    setValue({
                        ...value,
                        answer,
                    });
                }}
                title={"Question Title"}
            ></FormInput>

            <FormTextArea
                value={question}
                setValue={(question) => {
                    setValue({
                        ...value,
                        question,
                    });
                }}
                title={"Question"}
                style={style}
            ></FormTextArea>

            <CodeBlockAnswers
                value={answers}
                setValue={(answers) => {
                    setValue({
                        ...value,
                        answers,
                    });
                }}
            />

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
