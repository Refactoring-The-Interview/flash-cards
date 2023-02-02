import { Accordion, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FilterSetting, filterSettingsDefault } from "../../../Apis/types";
import { FilterForm } from "./FilterFrom/FilterForm";
import "./QuestionFiltersS.scss";

interface Props {
    filterSettings: FilterSetting;
    setFilterSettings(filterSetting: FilterSetting): void;
}

export const QuestionFilters = ({
    filterSettings,
    setFilterSettings,
}: Props) => {
    return (
        <div className="QuestionFilters">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5>Filter Settings</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <FilterForm
                            filterSettings={filterSettings}
                            setFilterSettings={setFilterSettings}
                        />

                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Reset to Default inputs</Tooltip>}
                        >
                            <Button
                                onClick={() => {
                                    setFilterSettings(filterSettingsDefault);
                                }}
                            >
                                Reset
                            </Button>
                        </OverlayTrigger>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
