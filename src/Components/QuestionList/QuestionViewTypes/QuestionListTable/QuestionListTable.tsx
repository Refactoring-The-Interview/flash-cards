import { Table } from "react-bootstrap";
import { MyQuestionContext } from "../../../QuestionContext/QuestionContext";
import { useContext } from "react";
import { Question, Tags } from "../../../../Apis/types";

const filerByType = (tag: Tags, questions: Question[]) => {
    return questions.filter(({ tags }) => {
        return tags.includes(Tags[tag]);
    });
};

export const QuestionListTable = () => {
    const { questions } = useContext(MyQuestionContext);

    const types = Object.keys(Tags);
    let questionTypesFiltered: any = [];
    types.forEach((tag) =>
        questionTypesFiltered.push(filerByType(tag, questions))
    );

    console.log(questionTypesFiltered);

    return <Table></Table>;
};
