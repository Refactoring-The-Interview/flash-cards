import { Badge, Button, Card, Figure, Form, FormGroup } from "react-bootstrap";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import duck from "../../Assets/IMGS/Mallard2.jpeg";
import { UserInfoEditForm } from "./UserInfoEditForm/UserInfoEditForm";
import { userInfo } from "../../Apis/types";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const Profile = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const [newUserInfo, setNewUserInfo] = useState<userInfo>(userInfo);
    const [showEdit, setShowEdit] = useState<boolean>(false);

    const { email, password } = userInfo;

    const logout = () =>
        setUserInfo({
            email: "",
            password: "",
        });

    return (
        <>
            <Card>
                <Card.Header>
                    <Figure>
                        <Figure.Image src={duck} width={171} height={180} />
                    </Figure>
                    <Badge>
                        <h2>{email}</h2>
                    </Badge>
                </Card.Header>

                <Card.Body>
                    <Card.Text>Email: {email}</Card.Text>
                    <Card.Text>Password: {password}</Card.Text>
                </Card.Body>

                {showEdit && (
                    <UserInfoEditForm
                        newUserInfo={newUserInfo}
                        setNewUserInfo={setNewUserInfo}
                    />
                )}

                <Card.Footer>
                    <Button variant="outline-primary" onClick={logout}>
                        Logout
                    </Button>
                    <Button
                        variant="outline-primary"
                        onClick={() => {
                            setShowEdit(!showEdit);
                            setUserInfo(newUserInfo);
                        }}
                    >
                        {showEdit ? "Save" : "Edit User"}
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};
