import { useState } from "react";
import { Button } from "react-bootstrap";
import { DeleteQuestionButton } from "../../../DeleteQuestionButton/DeleteQuestionButtton";
import { Question } from "../../../../Apis/types";

interface Props {
    question: Question;
}

export const DeleteButton = ({ question }: Props) => {
    return (
        <div>
            <DeleteQuestionButton question={question} />
        </div>
    );
};
