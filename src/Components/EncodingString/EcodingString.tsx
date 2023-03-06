import { useEffect, useState } from "react";
import "./EncodingStringS.scss";
import { StringInputForm } from "./StringInputForm";
import { encode } from "./utils";

export const EncodingString = () => {
    const [string, setstring] = useState<string>("");
    const [encodeString, setEncodeString] = useState<string>(encode(string));

    useEffect(() => {
        setEncodeString(encode(string));
    }, [string]);

    return (
        <div className="EncodingString">
            <p className="EncodingString-description">
                Run-length encoding (RLE) is a form of lossless data compression
                in which runs of data (sequences in which the same data value
                occurs in many consecutive data elements) are stored as a single
                data value and count, rather than as the original run. This is
                most efficient on data that contains many such runs, for
                example, simple graphic images such as icons, line drawings,
                Conway's Game of Life, and animations. For files that do not
                have many runs, RLE could increase the file size.
            </p>
            <StringInputForm value={string} setValue={setstring} />
            <div className="EncodingString-encoded">
                <h4>Encoded String:</h4>
                <div className="EncodingString-string">
                    <h4>{encodeString}</h4>
                </div>
            </div>
        </div>
    );
};
