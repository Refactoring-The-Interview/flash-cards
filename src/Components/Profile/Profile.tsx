import { Card, Figure, Modal } from "react-bootstrap";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { UserInfoEditForm } from "./UserInfoEditForm/UserInfoEditForm";
import { useState } from "react";
import { userInfo } from "../../Apis/types";
import { ProgressBars } from "../QuestionList/ProgressBars/ProgressBars";
import duck from "../../Assets/IMGS/Mallard2.jpeg";

export const Profile = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    const [newUserInfo, setNewUserInfo] = useState<userInfo>(userInfo);

    return (
        <>
            <Card>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={duck}
                    />
                </Figure>
                <Card.Body>
                    <ProgressBars />

                    <Card.Text>Email: {userInfo.email}</Card.Text>

                    <Card.Text>Password: {userInfo.password}</Card.Text>
                </Card.Body>

                <ConfirmButton
                    variant="outline-primary"
                    onConfirm={() => {
                        setUserInfo(newUserInfo);
                    }}
                    modalBody={
                        <>
                            <Modal.Title>Edit User Info</Modal.Title>
                            <UserInfoEditForm
                                newUserInfo={newUserInfo}
                                setNewUserInfo={setNewUserInfo}
                            />
                        </>
                    }
                    children={<>Edit User Info</>}
                ></ConfirmButton>
            </Card>
        </>
    );
};
