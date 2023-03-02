import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { QuestionFilters } from "../QuestionFilter/QuestionFilters";
import { AddQuestionForm } from "../../AddQuestionForm/AddQuestionForm";
import { Badge, ButtonGroup } from "react-bootstrap";
import { ViewSelect } from "../QuestionViewTypes/ViewSelect/ViewSelect";
import { QuestionListContext } from "../../Context/QuestionListContext";
import "./OffCanvasS.scss";

interface Props {
    setViewOptions(view: number): void;
}

export const OffCanvas = ({ setViewOptions }: Props) => {
    const { filterOptions, setFilterOptions, showDelete, setShowDelete } =
        useContext(QuestionListContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="OffCanvas-container">
            <Button
                variant="primary"
                onClick={handleShow}
                className="OffCanvas-button"
            >
                Options
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="OffCanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h1>Options</h1>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="OffCanvas-sideMenu">
                    <Badge>
                        <h4>ViewSelect</h4>
                        <ViewSelect setValue={setViewOptions} />
                    </Badge>
                    <QuestionFilters
                        setFilterSettings={setFilterOptions}
                        filterSettings={filterOptions}
                    />

                    <ButtonGroup>
                        <AddQuestionForm variantButton={"primary"} />{" "}
                        <Button
                            variant="danger"
                            onClick={() => {
                                setShowDelete(!showDelete);
                                handleClose();
                            }}
                        >
                            {showDelete ? "exit Delete Mode" : "Delete Mode"}
                        </Button>
                    </ButtonGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
