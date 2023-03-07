export const semordnilapPairs = (words: string[]) => {
    const seen = new Set();
    const result = [];

    for (const word of words) {
        const isReversed = word.split("").reverse().join("");
        if (seen.has(isReversed)) result.push([isReversed, word]);
        seen.add(word);
    }

    return result;
};
