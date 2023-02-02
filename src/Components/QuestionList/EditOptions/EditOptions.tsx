import { Button, ButtonGroup } from "react-bootstrap";
import { FilterSetting } from "../../../Apis/types";
import AddQuestionForm from "../../AddQuestionForm/AddQuestionForm";
import { QuestionFilters } from "../QuestionFilter/QuestionFilters";

interface Props {
    filterSettings: FilterSetting;
    setFilterSettings(filterSettings: FilterSetting): void;
    setShowDelete(showDelete: boolean): void;
    showDelete: boolean;
}

export const EditOptions = ({
    filterSettings,
    setFilterSettings,
    showDelete,
    setShowDelete,
}: Props) => {
    return (
        <>
            <ButtonGroup>
                <Button onClick={() => setShowDelete(!showDelete)}>
                    Delete Questions
                </Button>
                <AddQuestionForm />
            </ButtonGroup>
            <QuestionFilters
                setFilterSettings={setFilterSettings}
                filterSettings={filterSettings}
            />
        </>
    );
};
