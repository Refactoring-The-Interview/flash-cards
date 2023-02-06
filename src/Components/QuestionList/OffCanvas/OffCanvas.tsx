import { useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";
import AddQuestionForm from "../../AddQuestionForm/AddQuestionForm";
import { QuestionFilters } from "../QuestionFilter/QuestionFilters";
import { FilterSetting } from "../../../Apis/types";

interface Props {
    value: boolean;
    setValue(value: boolean): void;
    filterSettings: FilterSetting;
    setFilterSettings(filterSettings: FilterSetting): void;
}

export const OffCanvas = ({
    value,
    setValue,
    filterSettings,
    setFilterSettings,
}: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Show Options
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <h1>
                        <Badge>Options</Badge>
                    </h1>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <QuestionFilters
                        setFilterSettings={setFilterSettings}
                        filterSettings={filterSettings}
                    />
                    <AddQuestionForm variantButton={"outline-primary"} />
                    <Button
                        variant="outline-danger"
                        onClick={() => {
                            setValue(!value);
                        }}
                    >
                        Delete Question Mode
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
