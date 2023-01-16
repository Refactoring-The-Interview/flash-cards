import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionFiltersS.scss";

export const QuestionFilters = () => {
    return (
        <div className="QuestionFilters">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="s" placeholder="Search" />
                            </Form.Group>
                            <Form.Select
                                className="select-bar"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    // setQuestionType(e.target.value);
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
                                />
                            </Form.Group>
                            <Button variant="primary">filter</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
