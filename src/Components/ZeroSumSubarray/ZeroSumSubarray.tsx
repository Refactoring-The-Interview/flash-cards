import { useState } from "react";
import { ZeroFormInput } from "./ZeroFormInput";
import { zeroSumSubarray } from "./utils";

export const ZeroSumSubarray = () => {
    const [nums, setNums] = useState<string[]>([]);
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(zeroSumSubarray(nums[0].split(" ")));
                }}
            >
                <ZeroFormInput
                    value={nums}
                    setValue={(num: string[]) => {
                        setNums(num);
                    }}
                    title={"Number Array: "}
                    type={"text"}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
