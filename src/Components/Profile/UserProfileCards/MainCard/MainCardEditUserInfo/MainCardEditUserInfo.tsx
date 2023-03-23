import { Form } from "react-bootstrap";
import { userInfo } from "../../../../../Apis/types";

interface Props {
    value: userInfo;
    setValue(value: userInfo): void;
}

export const MainCardEditUserInfo = ({ value, setValue }: Props) => {
    return <Form></Form>;
};
