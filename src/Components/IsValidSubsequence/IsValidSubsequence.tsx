import { useState } from "react";
import { IsValidSubsequenceFormInputs } from "./IsValidSubsequenceFormIputs";
import "./IsValidSubsequenceS.scss";

export interface ValidSubsequenceProps {
    sequence: string[];
    subSequence: string[];
}

export const IsValidSubsequence = () => {
    const [isvalid, setIsValid] = useState<boolean>(false);
    const [isSubsequence, setIsSubsequence] = useState<ValidSubsequenceProps>({
        sequence: [],
        subSequence: [],
    });

    return (
        <div className="IsValidSubsequence">
            <h4 className="IsValidSubsequence-title">
                Valid Subsequence of Numbers
            </h4>
            <IsValidSubsequenceFormInputs
                value={isSubsequence}
                setValue={setIsSubsequence}
                setIsValid={setIsValid}
            />
            <div className="IsValidSubsequence-result">
                {isvalid ? (
                    <h1 className="correct">valid Subsequence!!</h1>
                ) : (
                    <h3 className="incorrect">not a valid substring</h3>
                )}
            </div>
        </div>
    );
};
