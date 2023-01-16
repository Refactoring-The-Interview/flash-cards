import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionFiltersS.scss";
import { useState } from "react";
import { FilterSetting } from "../../store/types";

interface Props {
    filterSettings(filterSettingObject: FilterSetting): void;
}

export const QuestionFilters = ({ filterSettings }: Props) => {
    const [typeSelect, setTypeSelect] = useState<string>("");
    return (
        <div className="QuestionFilters">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log(e);
                                // setQuestionType(e.target.value);
                            }}
                        >
                            <Form.Group className="mb-3">
                                <Form.Control
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                    }}
                                    type="s"
                                    placeholder="Search"
                                />
                            </Form.Group>
                            <Form.Select
                                className="select-bar"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setTypeSelect(e.target.value);
                                }}
                            >
                                <option value="Js">All</option>
                                <option value="array">Array</option>
                                <option value="object">Objects</option>
                            </Form.Select>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="Hide Answered"
                                    onChange={(e) => {
                                        console.log(e.target.value === "on");
                                    }}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                filter
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
