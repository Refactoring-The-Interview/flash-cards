import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionFiltersS.scss";
import { useState } from "react";
import { Difficulty, FilterSetting, Tags } from "../../../Apis/types";
import { DifficultySelect } from "./DifficultySelect/DifficultySelect";

interface Props {
    filterSettings(filterSettingObject: FilterSetting): void;
}

const filterSettingsDefault = {
    type: Tags.js,
    name: "",
    hideCorrect: false,
    difficulty: Difficulty.none,
};

export const QuestionFilters = ({ filterSettings }: Props) => {
    const [typeSelect, setTypeSelect] = useState<string>("");
    const [nameSearch, setNameSearch] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty | string>(
        Difficulty.none
    );
    const [hideCorrect, setHideCorrect] = useState<boolean>(false);
    const [questionFilter, setQuestionFilter] = useState<FilterSetting>(
        filterSettingsDefault
    );

    const formReset = () => {
        // setTypeSelect("");
        // setNameSearch("");
        // setDifficulty(Difficulty.none);
        // setHideCorrect(false);
        // filterSettings(filterSettingsDefault);

        setQuestionFilter(filterSettingsDefault);
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

                            <DifficultySelect
                                value={questionFilter.difficulty}
                                setValue={(difficulty) =>
                                    setQuestionFilter({
                                        ...questionFilter,
                                        difficulty,
                                    })
                                }
                            />

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
