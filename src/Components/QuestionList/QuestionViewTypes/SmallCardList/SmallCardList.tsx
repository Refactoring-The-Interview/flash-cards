import { ListGroup } from "react-bootstrap";
import { Question } from "../../../../Apis/types";
import { cardOrder } from "../../../../Apis/types";
import { SmallCard } from "./SmallCard/SmallCard";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
}

export const SmallCardList = ({ currentQuestions, showDelete }: Props) => {
    return (
        <ListGroup className="SmallCardList">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question) => {
                    return (
                        <ListGroup.Item>
                            <SmallCard question={question} />
                        </ListGroup.Item>
                    );
                })}
        </ListGroup>
    );
};
