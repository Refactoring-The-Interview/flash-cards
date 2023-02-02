import { Button } from "react-bootstrap";
import AddQuestionForm from "../../AddQuestionForm/AddQuestionForm";

interface Props {
    showDelete: boolean;
    setShowDelete(showDelete: boolean): void;
}

export const EditOptions = ({ showDelete, setShowDelete }: Props) => {
    return (
        <>
            <AddQuestionForm />
            <Button
                variant="secondary"
                onClick={() => {
                    setShowDelete(!showDelete);
                }}
            >
                Delete Mode
            </Button>
        </>
    );
};
