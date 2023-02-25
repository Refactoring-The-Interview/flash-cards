import { useContext, useEffect, useState } from "react";
import { QuestionListContextProps } from "./QuestionListContext";
import { MyQuestionContext } from "./QuestionContext";
import {
    FilterSetting,
    Question,
    filterSettingsDefault,
} from "../../Apis/types";
import { filterQuestions } from "../Utils/Utils";

export const useQuestionList = (): QuestionListContextProps => {
    const { questions } = useContext(MyQuestionContext);

    const [filterOptions, setFilterOptions] = useState<FilterSetting>(
        filterSettingsDefault
    );

    const [currentQuestions, setCurrentQuestions] =
        useState<Question[]>(questions);

    useEffect(() => {
        setCurrentQuestions(filterQuestions({ questions, filterOptions }));
    }, [filterOptions, questions]);

    const [showDelete, setShowDelete] = useState<boolean>(false);

    return {
        filterOptions,
        setFilterOptions,
        currentQuestions,
        showDelete,
        setShowDelete,
    };
};
