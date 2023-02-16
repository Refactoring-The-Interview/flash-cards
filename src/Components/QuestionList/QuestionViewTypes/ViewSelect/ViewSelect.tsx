import { Form } from "react-bootstrap";
import { ViewStyles } from "../../../../Apis/types";

interface Props {
    setValue(value: number): void;
}

export const ViewSelect = ({ setValue }: Props) => {
    return (
        <Form.Select
            onChange={(e) => {
                const view = parseInt(e.target.value);
                setValue(view);
            }}
        >
            <option value={ViewStyles.CARDS}>Cards</option>
            <option value={ViewStyles.TABLE}>Table</option>
            <option value={ViewStyles.SMALLCARDS}>Small cards</option>
        </Form.Select>
    );
};
