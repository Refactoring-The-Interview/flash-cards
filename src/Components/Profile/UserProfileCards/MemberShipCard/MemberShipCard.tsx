import { Badge, Card } from "react-bootstrap";

export const MemberShipCard = () => {
    return (
        <Card className="MemberShipCard">
            <Card.Header>
                <Card.Title>Membership Status</Card.Title>
            </Card.Header>
            <Card.Body>
                <Badge bg="success" className="MemberShipCard-badge">
                    <h6>Active</h6>
                </Badge>
            </Card.Body>
        </Card>
    );
};
