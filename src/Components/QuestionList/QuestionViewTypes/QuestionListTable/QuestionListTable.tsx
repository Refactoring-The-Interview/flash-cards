import { useContext } from "react";

import { Question, Tags } from "../../../../Apis/types";
import { Table } from "react-bootstrap";
import { TableListTitle } from "./TableListTitle/TableListTitle";
import { TableListItems } from "./TableListItems/TableListItems";
import { MyQuestionContext } from "../../../Context/QuestionContext";

export const QuestionListTable = () => {
    const { questions } = useContext(MyQuestionContext);
    const questionsByTags: Question[][] = [];
    const tags = Object.values(Tags);
    tags.forEach((tag) => {
        const arr = questions.filter(({ tags }) => {
            return tags.includes(tag);
        });
        questionsByTags.push(arr);
    });

    return (
        <Table striped bordered>
            <thead>
                <TableListTitle titles={tags} />
            </thead>

            <tbody>
                {questionsByTags.map((questions: Question[]) => {
                    return <TableListItems questions={questions} />;
                })}
            </tbody>
        </Table>
    );
};
