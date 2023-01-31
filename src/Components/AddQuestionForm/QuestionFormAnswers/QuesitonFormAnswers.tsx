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
                                onFocus={() => {
                                    if (index === value.length - 1) {
                                        setValue([...value, ""]);
                                    }
                                }}
                                onChange={(event) => {
                                    const newAnswer = event.target.value;
                                    const newAnswers = [...value];
                                    newAnswers[index] = newAnswer;
                                    setValue(newAnswers);
                                }}
                            ></input>
                            <Button
                                variant="outline-danger"
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
                                X
                            </Button>
                        </div>
                    );
                })}
            </Form.Group>
        </>
    );
};
