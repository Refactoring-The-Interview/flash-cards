export const validate = (sequenceOne: string[], sequenceTwo: string[]) => {
    let j = 0;
    for (let i = 0; i < sequenceOne.length; i += 1) {
        const itemOne = sequenceOne[i];
        const itemTwo = sequenceTwo[j];
        if (itemOne === itemTwo) j += 1;
    }

    return j === sequenceTwo.length;
};
