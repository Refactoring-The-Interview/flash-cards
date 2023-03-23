import { Card } from "react-bootstrap";
import { ProgressBarList } from "./ProgressBarList/ProgressBarList";
import "./ProgressCardS.scss";

export const ProgressCard = () => {
    return (
        <Card className="ProgressCard">
            <Card.Header>
                <Card.Title>Question Progress</Card.Title>
            </Card.Header>
            <Card.Body>
                <ProgressBarList />
            </Card.Body>
        </Card>
    );
};
