import { Question } from "../../../Apis/types";
import { StyleSelect } from "../StyleSelect/StyleSelect";
import { CodeBlockForm } from "./CodeBlockForm/CodeBlockForm";
import { MultipleChoiceForm } from "./MultipleChoiceForm/MultipleChoiceForm";

interface Props {
    value: Question;
    setValue(value: Question): void;
}

export const QuestionFormBody = ({ value, setValue }: Props) => {
    const { style } = value;
    return (
        <div>
            {style === 0 ? (
                <MultipleChoiceForm value={value} setValue={setValue} />
            ) : (
                <CodeBlockForm value={value} setValue={setValue} />
            )}

            <StyleSelect
                value={style}
                setValue={(style) => {
                    setValue({
                        ...value,
                        style,
                    });
                }}
            />
        </div>
    );
};
