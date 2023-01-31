import { Button, Form } from "react-bootstrap";

interface AnswerProps {
    value: string[];
    setValue(value: string[]): void;
}

export const QuestionFormAnswers = ({ value, setValue }: AnswerProps) => {
    return (
        <>
            <Form.Group>
                {value.map((answer: string, index: number) => {
                    return (
                        <div>
                            <Form.Label>Answer</Form.Label>
                            <input
                                value={answer}
                                onChange={(event) => {
                                    const newAnswer = event.target.value;
                                    const newAnswers = [...value];
                                    newAnswers[index] = newAnswer;
                                    setValue(newAnswers);
                                    if (index === value.length - 1) {
                                        setValue([...value, ""]);
                                    }
                                }}
                            ></input>
                            <Button
                                onClick={(e) => {
                                    const removed = value
                                        .slice(0, index)
                                        .concat(
                                            value.slice(index + 1, value.length)
                                        );
                                    console.log(removed);
                                    setValue([...removed]);
                                }}
                            >
                                {" "}
                                Remove{" "}
                            </Button>
                        </div>
                    );
                })}
            </Form.Group>
        </>
    );
};
