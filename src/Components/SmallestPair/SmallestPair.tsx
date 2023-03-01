import { useEffect, useState } from "react";
import { NumberInputs } from "./NumberInputs";
import { NumberProps } from "./types";
import { smallestNumberPairing } from "./utils";
import { DisplayPair } from "./DisplayPair";

export const SmallestPair = () => {
    const [numbers, setNumbers] = useState<NumberProps>({
        numbersOne: [],
        numbersTwo: [],
    });

    const { numbersOne, numbersTwo } = numbers;
    const [smallestPairing, setSmallestParing] = useState<number[]>(
        smallestNumberPairing(numbersOne, numbersTwo)
    );

    useEffect(() => {
        setSmallestParing(smallestNumberPairing(numbersOne, numbersTwo));
    }, [numbers]);

    return (
        <div className="SmallestPair">
            <h6>Absolute Zero pair</h6>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(numbers);
                }}
            >
                <NumberInputs
                    value={numbersOne}
                    setValue={(numbersOne) => {
                        setNumbers({
                            ...numbers,
                            numbersOne,
                        });
                    }}
                />

                <NumberInputs
                    value={numbersTwo}
                    setValue={(numbersTwo) => {
                        setNumbers({
                            ...numbers,
                            numbersTwo,
                        });
                    }}
                />
                <button type="submit"> Submit</button>
            </form>
            <DisplayPair pair={smallestPairing} />
        </div>
    );
};
