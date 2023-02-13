import { Table } from "react-bootstrap";
import { MyQuestionContext } from "../../../QuestionContext/QuestionContext";
import { useContext } from "react";
import { Question, Tags } from "../../../../Apis/types";
import { Loading } from "../../../Loading/Loading";
import { TableListItems } from "./TableListItems/TableListItems";
import { TableListTitle } from "./TableListTitle/TableListTitle";
import "./QuestionListTableS.scss";

const filerByType = (tag: Tags, questions: Question[]) => {
    return questions.filter(({ tags }) => {
        return tags.includes(tag);
    });
};

export const QuestionListTable = () => {
    const { questions } = useContext(MyQuestionContext);
    const types = Object.values(Tags);
    let questionTypesFiltered: Question[][] = [];

    types.forEach((tag) =>
        questionTypesFiltered.push(filerByType(tag as Tags, questions))
    );

    if (questionTypesFiltered.length === 0) return <Loading />;

    return (
        <Table striped bordered hover className="QuestionListTable">
            <thead className="TableTitle">
                {types.map((tag) => {
                    return (
                        <tr>
                            <TableListTitle title={tag} />
                        </tr>
                    );
                })}
            </thead>
            <tbody className="TableListItems">
                {questionTypesFiltered.map((questions) => {
                    return (
                        <tr>
                            <TableListItems questions={questions} />
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
