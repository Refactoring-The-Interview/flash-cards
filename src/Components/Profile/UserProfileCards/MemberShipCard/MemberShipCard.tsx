import { Badge, Card } from "react-bootstrap";

export const MemberShipCard = () => {
    return (
        <Card className="MemberShipCard">
            <Card.Header>Membership Status</Card.Header>
            <Card.Body>
                <Badge bg="success">Active</Badge>
            </Card.Body>
        </Card>
    );
};
