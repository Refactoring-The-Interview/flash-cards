import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionFiltersS.scss";
import { FilterSetting, filterSettingsDefault } from "../../../Apis/types";
import { DifficultySelect } from "./DifficultySelect/DifficultySelect";
import { TypeSelect } from "./TypeSelect/TypeSelect";
import { SearchBar } from "./SearchBar/SearchBar";
import { Checkbox } from "./CheckBox/CheckBox";

interface Props {
    setFilterSettings(filterSettingObject: FilterSetting): void;
    filterSettings: FilterSetting;
}

export const QuestionFilters = ({
    filterSettings,
    setFilterSettings,
}: Props) => {
    const formReset = () => {
        setFilterSettings(filterSettingsDefault);
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
                                    filterSettings;
                                setFilterSettings({
                                    type: type,
                                    name: name,
                                    hideCorrect: hideCorrect,
                                    difficulty: difficulty,
                                });
                            }}
                        >
                            <SearchBar
                                value={filterSettings.name}
                                setValue={(name) => {
                                    setFilterSettings({
                                        ...filterSettings,
                                        name,
                                    });
                                }}
                            />

                            <TypeSelect
                                value={filterSettings.type}
                                setValue={(type) => {
                                    setFilterSettings({
                                        ...filterSettings,
                                        type,
                                    });
                                }}
                            />
                            <DifficultySelect
                                value={filterSettings.difficulty}
                                setValue={(difficulty) =>
                                    setFilterSettings({
                                        ...filterSettings,
                                        difficulty,
                                    })
                                }
                            />
                            <Checkbox
                                value={filterSettings.hideCorrect}
                                setValue={(hideCorrect) => {
                                    setFilterSettings({
                                        ...filterSettings,
                                        hideCorrect,
                                    });
                                }}
                            />

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
