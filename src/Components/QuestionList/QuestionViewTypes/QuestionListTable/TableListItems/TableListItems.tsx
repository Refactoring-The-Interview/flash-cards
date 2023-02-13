import { Question } from "../../../../../Apis/types";

interface Props {
    questions: Question[];
}

export const TableListItems = ({ questions }: Props) => {
    return (
        <>
            {questions.map((currentQuestion) => {
                const { question, answer, tags } = currentQuestion;
                return (
                    <td>
                        <div>
                            <span>Difficulty color</span>
                        </div>
                        <div>{answer}</div>
                    </td>
                );
            })}
        </>
    );
};
