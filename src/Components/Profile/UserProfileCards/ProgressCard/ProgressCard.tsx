import { Card, ListGroup } from "react-bootstrap";
import { Difficulty } from "../../../../Apis/types";
import { ProgressBars } from "../../../QuestionList/ProgressBars/ProgressBars";

export const ProgressCard = () => {
    return (
        <Card>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                        Over All Progress:
                        <ProgressBars
                            difficulty={Difficulty.none}
                            variant={"primary"}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Easy:
                        <ProgressBars
                            difficulty={Difficulty.easy}
                            variant={"success"}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Medium:
                        <ProgressBars
                            difficulty={Difficulty.medium}
                            variant={"warning"}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Hard:
                        <ProgressBars
                            difficulty={Difficulty.hard}
                            variant={"danger"}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};
