import "./DisplayPairS.scss";

interface Props {
    pair: number[];
}

export const DisplayPair = ({ pair }: Props) => {
    const num1 = pair[0];
    const num2 = pair[1];
    const num3 = Math.abs(num1 - num2);

    return (
        <div className="DisplayPair">
            <h6>{num1}</h6> - <h6>{num2}</h6> = <h6>{num3}</h6>
        </div>
    );
};
