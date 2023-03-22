import { Button, Card, CardGroup, ListGroup } from "react-bootstrap";
import duck from "../../../../Assets/IMGS/Mallard2.jpeg";
import {
    StorageKey,
    useLocalStorage,
} from "../../../LocalStorage/LocalStorage";
import "./MainCardS.scss";

export const MainCard = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const { email, password } = userInfo;
    const today = new Date();
    const lastSeen = today.toLocaleDateString("en-US");

    return (
        <Card className="MainCard">
            <Card.Body className="MainCard-body">
                <Card.Img src={duck} height={180} />

                <CardGroup className="MainCard-nameAndLastSeen">
                    <Card.Title> Guest User </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Last Seen: {lastSeen}
                    </Card.Subtitle>
                </CardGroup>

                <ListGroup variant="flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>
                        <h5>{email}</h5>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h5>{password}</h5>
                    </ListGroup.Item>
                </ListGroup>

                <Button className="MainCard-editUser">Edit User</Button>
            </Card.Body>
        </Card>
    );
};
