import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

export const QuestionFilters = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                        <Form.Select
                            className="select-bar"
                            aria-label="Default select example"
                            onChange={(e) => {
                                // setQuestionType(e.target.value);
                            }}
                        >
                            <option value="Js">Default Filter</option>
                            <option value="array">Array</option>
                            <option value="object">Objects</option>
                        </Form.Select>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
