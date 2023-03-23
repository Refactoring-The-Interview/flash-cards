import { Form, ListGroup } from "react-bootstrap";
import { userInfo } from "../../../../../Apis/types";

interface Props {
    value: userInfo;
    setValue(value: userInfo): void;
}

export const MainCardEditUserInfo = ({ value, setValue }: Props) => {
    const { email, password } = value;

    return (
        <Form>
            <ListGroup variant="flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>
                    <h5>
                        <input
                            value={email}
                            onChange={(e) => {
                                const email = e.target.value;
                                setValue({
                                    ...value,
                                    email,
                                });
                            }}
                        />
                    </h5>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h5>
                        <input
                            value={password}
                            onChange={(e) => {
                                const password = e.target.value;
                                setValue({
                                    ...value,
                                    password,
                                });
                            }}
                        />
                    </h5>
                </ListGroup.Item>
            </ListGroup>
        </Form>
    );
};
