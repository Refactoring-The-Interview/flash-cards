import { ListGroup } from "react-bootstrap";

interface Props {
    email: string;
    password: string;
}

export const MainCardUserInfo = ({ email, password }: Props) => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>
                <h5>{email}</h5>
            </ListGroup.Item>

            <ListGroup.Item>
                <h5>{password}</h5>
            </ListGroup.Item>
        </ListGroup>
    );
};
