import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

export const QuestionFilters = () => {
    return (
        <div>
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
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
