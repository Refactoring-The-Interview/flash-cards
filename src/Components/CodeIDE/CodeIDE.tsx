import CodeEditor from "@uiw/react-textarea-code-editor";

interface Props {
    value: string;
    setValue(value: string): void;
}

export const CodeIDE = ({ value, setValue }: Props) => {
    return (
        <CodeEditor
            value={value}
            data-color-mode="dark"
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setValue(evn.target.value)}
            padding={15}
            style={{
                fontSize: 12,
                fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
        />
    );
};
