import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FilterSetting } from "../../../../Apis/types";
import { SearchBar } from "../SearchBar/SearchBar";
import { DifficultySelect } from "../DifficultySelect/DifficultySelect";
import { TypeSelect } from "../TypeSelect/TypeSelect";
import { Checkbox } from "../CheckBox/CheckBox";

interface Props {
    filterSettings: FilterSetting;
    setFilterSettings(filterSetting: FilterSetting): void;
}

export const FilterForm = ({ filterSettings, setFilterSettings }: Props) => {
    const { name, type, difficulty, hideCorrect } = filterSettings;
    return (
        <>
            <Form>
                <SearchBar
                    value={name}
                    setValue={(name) => {
                        setFilterSettings({
                            ...filterSettings,
                            name,
                        });
                    }}
                />

                <DifficultySelect
                    value={difficulty}
                    setValue={(difficulty) => {
                        setFilterSettings({
                            ...filterSettings,
                            difficulty,
                        });
                    }}
                />

                <TypeSelect
                    value={type}
                    setValue={(type) => {
                        setFilterSettings({
                            ...filterSettings,
                            type,
                        });
                    }}
                />

                <Checkbox
                    value={hideCorrect}
                    setValue={(hideCorrect) => {
                        setFilterSettings({
                            ...filterSettings,
                            hideCorrect,
                        });
                    }}
                />
            </Form>
        </>
    );
};
