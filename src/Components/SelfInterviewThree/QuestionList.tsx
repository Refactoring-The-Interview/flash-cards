import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
}

export const QuestionList = ({ questions }: Props) => {
    if (!questions.length) {
        return <>loading</>;
    }

    return (
        <div>
            {questions.map((question) => {
                const { answer } = question;
                return <div>{answer}</div>;
            })}
        </div>
    );
};
