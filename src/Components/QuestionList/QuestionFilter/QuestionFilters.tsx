import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { FilterFrom } from "./FilterFrom/FilterForm";
import { FilterSetting, filterSettingsDefault } from "../../../Apis/types";
import "./QuestionFiltersS.scss";

interface Props {
    filterSettings: FilterSetting;
    setFilterSettings(filterSettings: FilterSetting): void;
}

export const QuestionFilters = ({
    filterSettings,
    setFilterSettings,
}: Props) => {
    const test = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Settings</Popover.Header>
            <Popover.Body>
                <FilterFrom
                    filterSettings={filterSettings}
                    setFilterSettings={setFilterSettings}
                />
                <Button
                    onClick={() => {
                        setFilterSettings(filterSettingsDefault);
                    }}
                >
                    Reset Form
                </Button>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="QuestionFilters">
            <OverlayTrigger trigger="click" placement="bottom" overlay={test}>
                <Button variant="primary">Filter Settings</Button>
            </OverlayTrigger>
        </div>
    );
};
