import React, { useContext, useState } from "react";
import "./QuestionListS.scss";
import { Loading } from "../Loading/Loading";
import { OffCanvas } from "./OffCanvas/OffCanvas";
import { QuestionCards } from "./QuestionViewTypes/QuestionCards/QuestionCards";
import { SmallCardList } from "./QuestionViewTypes/SmallCardList/SmallCardList";
import { QuestionCardsWithImage } from "./QuestionViewTypes/QuestionCardWithImage/QuestionCardsWithImage";
import { QuestionListProvider } from "../Context/QuestionListContext";

export const QuestionList = () => {
    const [viewOptions, setViewOptions] = useState<number>(1);

    const currentView = (viewOptions: number) => {
        switch (viewOptions) {
            case 1:
                return <QuestionCards />;
            case 2:
                return <SmallCardList />;
            case 3:
                return <QuestionCardsWithImage />;
        }
    };

    return (
        <QuestionListProvider>
            <div className="QuestionList">
                <OffCanvas setViewOptions={setViewOptions} />

                {currentView(viewOptions)}
            </div>
        </QuestionListProvider>
    );
};
