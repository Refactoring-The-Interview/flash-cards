import { Form, FormGroup } from "react-bootstrap";
import { userInfo } from "../../../Apis/types";

interface EditFormProps {
    newUserInfo: userInfo;
    setNewUserInfo(newUserInfo: userInfo): void;
}

export const UserInfoEditForm = ({
    newUserInfo,
    setNewUserInfo,
}: EditFormProps) => {
    const { email, password } = newUserInfo;
    return (
        <Form>
            <FormGroup>
                <Form.Label>Email</Form.Label>
                <input
                    value={email}
                    onChange={(event) => {
                        const newEmail = event.target.value;
                        setNewUserInfo({
                            email: newEmail,
                            password: password,
                        });
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Form.Label>Password</Form.Label>
                <input
                    value={password}
                    onChange={(event) => {
                        const newPassword = event.target.value;
                        setNewUserInfo({
                            email: email,
                            password: newPassword,
                        });
                    }}
                />
            </FormGroup>
        </Form>
    );
};
