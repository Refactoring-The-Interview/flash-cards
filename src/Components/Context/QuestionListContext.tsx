import { ReactNode, createContext } from "react";
import {
    FilterSetting,
    Question,
    filterSettingsDefault,
} from "../../Apis/types";
import { useQuestionList } from "./useQuestionList";

export interface QuestionListContextProps {
    currentQuestions: Question[];
    showDelete: boolean;
    filterOptions: FilterSetting;
    setFilterOptions(filterOptions: FilterSetting): void;
    setShowDelete(showDelete: boolean): void;
}

export const QuestionListContext = createContext<QuestionListContextProps>({
    currentQuestions: [],
    showDelete: false,
    filterOptions: filterSettingsDefault,
    setShowDelete: () => {},
    setFilterOptions: () => {},
});

interface Props {
    children: ReactNode;
}

export const QuestionListProvider = ({ children }: Props) => {
    const {
        currentQuestions,
        filterOptions,
        showDelete,
        setFilterOptions,
        setShowDelete,
    } = useQuestionList();

    return (
        <QuestionListContext.Provider
            value={{
                filterOptions,
                currentQuestions,
                showDelete,
                setFilterOptions,
                setShowDelete,
            }}
        >
            {children}
        </QuestionListContext.Provider>
    );
};
