import { ListGroup } from "react-bootstrap";
import { Question, Tags } from "../../../Apis/types";
import { ListItem } from "./ListItem/ListItem";
import { Loading } from "../../Loading/Loading";

interface SortProps {
    questions: Question[];
    showDelete: boolean;
}

export const QuestionSort = ({ questions, showDelete }: SortProps) => {
    const types = Object.values(Tags).filter((item) => item !== "Js");
    let sortedQuestions: Question[][] = [];

    types.sort().forEach((type) => {
        sortedQuestions.push(
            questions.filter((question: Question) => {
                return question.tags.includes(type);
            })
        );
    });

    if (sortedQuestions.length === 0) return <Loading />;
    return (
        <ListGroup>
            {sortedQuestions.map((questions: Question[], index: number) => {
                return (
                    <ListItem
                        questions={questions}
                        type={types[index]}
                        showDelete={showDelete}
                    />
                );
            })}
        </ListGroup>
    );
};
