import { useEffect, useState } from "react";
import { Question } from "../../../../Apis/types";
import { Card } from "react-bootstrap";
import { CodeIDE } from "../../../CodeIDE/CodeIDE";

interface Props {
    cardQuestion: Question;
    showSolution: boolean;
}

export const CodeBlockStyle = ({ cardQuestion, showSolution }: Props) => {
    const { question, answers } = cardQuestion;
    const currentCode = showSolution ? answers[0] : question;
    const [codeBlock, setCodeBlock] = useState<string>(currentCode);

    useEffect(() => {
        setCodeBlock(currentCode);
    }, [currentCode, showSolution]);

    return (
        <Card.Text>
            <div className="w-tc-editor-var">
                <CodeIDE
                    value={codeBlock}
                    setValue={(userInput) => {
                        setCodeBlock(userInput);
                    }}
                />
            </div>
        </Card.Text>
    );
};
