import { useEffect, useState } from "react";
import { About } from "./About";
import { SemordnilapInput } from "./SemordnilapInput";
import { SemordnilapPairings } from "./SemordnilapPairings";
import "./SemordnilapS.scss";
import { semordnilapPairs } from "./utils";

export const Semordnilap = () => {
    const [semordnilap, setSemordnilap] = useState<string[][]>([[]]);
    const [words, setWords] = useState<string>("");

    useEffect(() => {
        const arrayOfStrings = words.split(" ");
        const Parings = semordnilapPairs(arrayOfStrings);
        setSemordnilap(Parings);
    }, [words, setWords]);

    return (
        <div className="Semordnilap">
            <About />
            <form className="Semordnilap-from">
                <h4>
                    Enter a sentence or grouping of words to find the
                    Semordnilap Pairing if any exits in the group or sentence:{" "}
                </h4>
                <SemordnilapInput
                    value={words}
                    setValue={(input) => {
                        setWords(input);
                    }}
                />
            </form>
            <div>
                <h4>Word Parings that are a semordnilap</h4>
                <SemordnilapPairings semordnilaps={semordnilap} />
            </div>
        </div>
    );
};
