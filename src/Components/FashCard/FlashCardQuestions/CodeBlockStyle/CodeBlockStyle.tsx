import { useEffect, useState } from "react";
import { Question } from "../../../../Apis/types";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Button, Card } from "react-bootstrap";

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
    }, [showSolution]);

    return (
        <Card.Text>
            <div className="w-tc-editor-var">
                <CodeEditor
                    value={codeBlock}
                    data-color-mode="dark"
                    language="js"
                    placeholder="Please enter JS code."
                    onChange={(evn) => setCodeBlock(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    }}
                />
            </div>
        </Card.Text>
    );
};
