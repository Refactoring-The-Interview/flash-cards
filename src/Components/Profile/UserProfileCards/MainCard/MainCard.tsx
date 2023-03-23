import { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import duck from "../../../../Assets/IMGS/Mallard2.jpeg";
import {
    StorageKey,
    useLocalStorage,
} from "../../../LocalStorage/LocalStorage";
import { MainCardEditUserInfo } from "./MainCardEditUserInfo/MainCardEditUserInfo";
import "./MainCardS.scss";
import { MainCardUserInfo } from "./MainCardUserInfo/MainCardUserInfo";

export const MainCard = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const [edit, setEdit] = useState<boolean>(false);

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

                {!edit ? (
                    <MainCardUserInfo email={email} password={password} />
                ) : (
                    <MainCardEditUserInfo
                        value={userInfo}
                        setValue={setUserInfo}
                    />
                )}

                <Button
                    className="MainCard-editUser"
                    onClick={(e) => {
                        setEdit(!edit);
                    }}
                >
                    {!edit ? "Edit User" : "Save"}
                </Button>
            </Card.Body>
        </Card>
    );
};
