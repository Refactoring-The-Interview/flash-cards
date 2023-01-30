import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionFiltersS.scss";
import { useState } from "react";
import { Difficulty, FilterSetting, Tags } from "../../../Apis/types";
import { DifficultySelect } from "./DifficultySelect/DifficultySelect";
import { TypeSelect } from "./TypeSelect/TypeSelect";
import { SearchBar } from "./SearchBar/SearchBar";

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
    const [hideCorrect, setHideCorrect] = useState<boolean>(false);
    const [questionFilter, setQuestionFilter] = useState<FilterSetting>(
        filterSettingsDefault
    );

    const formReset = () => {
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
                                const { difficulty, type, name, hideCorrect } =
                                    questionFilter;
                                filterSettings({
                                    type: type,
                                    name: name,
                                    hideCorrect: hideCorrect,
                                    difficulty: difficulty,
                                });
                            }}
                        >
                            <SearchBar
                                value={questionFilter.name}
                                setValue={(name) => {
                                    setQuestionFilter({
                                        ...questionFilter,
                                        name,
                                    });
                                }}
                            />

                            <TypeSelect
                                value={questionFilter.type}
                                setValue={(type) => {
                                    setQuestionFilter({
                                        ...questionFilter,
                                        type,
                                    });
                                }}
                            />
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
