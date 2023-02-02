import { ListGroup } from "react-bootstrap";
import { Question, Tags } from "../../../Apis/types";
import { QuestionCards } from "../QuestionCards/QuestionCards";
import { ListItem } from "./ListItem/ListItem";
import { useEffect, useState } from "react";
import { Loading } from "../../Loading/Loading";

interface SortProps {
    questions: Question[];
    SortArray?: string[];
}

export const QuestionSort = ({ questions }: SortProps) => {
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
    console.log(sortedQuestions);
    return (
        <ListGroup>
            {sortedQuestions.map((questions: Question[], index: number) => {
                return <ListItem questions={questions} type={types[index]} />;
            })}
        </ListGroup>
    );
};
