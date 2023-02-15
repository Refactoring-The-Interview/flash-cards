import { Badge, Button, Card, Figure } from "react-bootstrap";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import duck from "../../Assets/IMGS/Mallard2.jpeg";

export const Profile = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    const { email, password } = userInfo;
    return (
        <Card>
            <Card.Header>
                <Figure>
                    <Figure.Image src={duck} width={180} height={180} />
                </Figure>
                <Card.Text>
                    <Badge>
                        <h3>{email}</h3>
                    </Badge>
                </Card.Text>
            </Card.Header>

            <Card.Body>
                <Card.Text>
                    <Badge bg="secondary">
                        <h6> User Email</h6>
                    </Badge>
                    : {email}
                </Card.Text>

                <Card.Text>
                    <Badge bg="secondary">
                        <h6>Password:</h6>
                    </Badge>
                    : {password}
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                <Button variant="outline-primary">Logout</Button>{" "}
                <Button variant="outline-primary">Edit User</Button>
            </Card.Footer>
        </Card>
    );
};
