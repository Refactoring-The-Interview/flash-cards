import { ListGroup } from "react-bootstrap";
import { cardOrder } from "../../../../Apis/types";
import { SmallCard } from "./SmallCard/SmallCard";
import { useContext } from "react";
import { QuestionListContext } from "../../../Context/QuestionListContext";

export const SmallCardList = () => {
    const { currentQuestions, showDelete } = useContext(QuestionListContext);

    return (
        <ListGroup className="SmallCardList">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question) => {
                    return (
                        <ListGroup.Item>
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
