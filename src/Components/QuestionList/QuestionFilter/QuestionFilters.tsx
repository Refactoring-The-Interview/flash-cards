import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionFiltersS.scss";
import { useState } from "react";
import { Difficulty, FilterSetting } from "../../../Apis/types";

interface Props {
    filterSettings(filterSettingObject: FilterSetting): void;
}

export const QuestionFilters = ({ filterSettings }: Props) => {
    const filterSettingsDefault = {
        type: "Js",
        name: "",
        hideCorrect: false,
        difficulty: "" as Difficulty,
    };
    const [typeSelect, setTypeSelect] = useState<string>("");
    const [nameSearch, setNameSearch] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty | string>(
        Difficulty.none
    );
    const [hideCorrect, setHideCorrect] = useState<boolean>(false);

    const formReset = () => {
        setTypeSelect("");
        setNameSearch("");
        setDifficulty(Difficulty.none);
        setHideCorrect(false);
        filterSettings(filterSettingsDefault);
    };

    return (
        <div className="QuestionFilters">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                filterSettings({
                                    type: typeSelect,
                                    name: nameSearch,
                                    hideCorrect: hideCorrect,
                                    difficulty: difficulty as Difficulty,
                                });
                            }}
                        >
                            <Form.Group className="mb-2">
                                <Form.Control
                                    onChange={(e) => {
                                        setNameSearch(e.target.value);
                                    }}
                                    type="search"
                                    placeholder="Search"
                                    value={nameSearch}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Select
                                    className="select-bar"
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        setTypeSelect(e.target.value);
                                    }}
                                >
                                    <option value="Js">Type</option>
                                    <option value="array">Array</option>
                                    <option value="object">Objects</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Select
                                    className="select-bar"
                                    aria-label="Default select example"
                                    placeholder="Difficulty"
                                    onChange={(e) => {
                                        setDifficulty(e.target.value);
                                    }}
                                >
                                    <option value="">Difficulty</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="Hide Answered"
                                    onChange={(e) => {
                                        setHideCorrect(!hideCorrect);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="buttons">
                                <Button variant="primary" type="submit">
                                    filter
                                </Button>

                                <Button
                                    variant="primary"
                                    type="button"
                                    onClick={formReset}
                                >
                                    Reset
                                </Button>
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
