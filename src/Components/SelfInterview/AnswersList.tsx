interface Props {
    answer: string;
    answers: string[];
}

export const AnswersList = ({ answer, answers }: Props) => {
    return (
        <>
            {answers.map((currentAnswer) => {
                const style =
                    currentAnswer === answer
                        ? { background: "yellow" }
                        : { background: "none" };

                return <div style={style}>{currentAnswer}</div>;
            })}
        </>
    );
};
