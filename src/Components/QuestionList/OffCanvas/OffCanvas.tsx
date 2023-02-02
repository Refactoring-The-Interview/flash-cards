import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FilterSetting } from "../../../Apis/types";
import { QuestionFilters } from "../QuestionFilter/QuestionFilters";
import AddQuestionForm from "../../AddQuestionForm/AddQuestionForm";

interface Props {
    setFilterSettings(filterSetting: FilterSetting): void;
    filterSettings: FilterSetting;
    showDelete: boolean;
    setShowDelete(showDelete: boolean): void;
}

export const OffCanvas = ({
    setFilterSettings,
    filterSettings,
    showDelete,
    setShowDelete,
}: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Options
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h1>Options</h1>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <QuestionFilters
                        setFilterSettings={setFilterSettings}
                        filterSettings={filterSettings}
                    />
                    <AddQuestionForm variantButton={"primary"} />
                    <Button
                        variant="danger"
                        onClick={() => {
                            setShowDelete(!showDelete);
                            handleClose();
                        }}
                    >
                        {showDelete ? "exit Delete Mode" : "Delete Mode"}
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
