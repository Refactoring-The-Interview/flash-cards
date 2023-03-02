import { ListGroup } from "react-bootstrap";
import { cardOrder } from "../../../../Apis/types";
import { SmallCard } from "./SmallCard/SmallCard";
import { useContext } from "react";
import { QuestionListContext } from "../../../Context/QuestionListContext";
import "./SmallCardListS.scss";

export const SmallCardList = () => {
    const { currentQuestions, showDelete } = useContext(QuestionListContext);

    return (
        <ListGroup className="SmallCardList" variant="flush">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question) => {
                    return (
                        <ListGroup.Item className="SmallCardList-item">
                            <SmallCard
                                question={question}
                                showDelete={showDelete}
                            />
                        </ListGroup.Item>
                    );
                })}
        </ListGroup>
    );
};
