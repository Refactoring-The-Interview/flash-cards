import { useState } from "react";
import { Question } from "../../../../Apis/types";
import CodeEditor from "@uiw/react-textarea-code-editor";

interface Props {
    cardQuestion: Question;
}

export const CodeBlockStyle = ({ cardQuestion }: Props) => {
    const [code, setCode] = useState<string>(
        `const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        function isPrime(num) {
          for (let i = 2; num > i; i++) {
            if (num % i === 0) {
              return false;
            }
          }
          return num > 1;
        }

        console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]`
    );

    return (
        <div>
            <div className="w-tc-editor-var"> </div>
            <CodeEditor
                value={code}
                data-color-mode="dark"
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                }}
            />
        </div>
    );
};
