export const zeroSumSubarray = (nums: any[]) => {
    const set = new Set();
    let runningtotal = 0;

    for (const num of nums) {
        runningtotal += num;
        if (num === 0 || runningtotal === 0 || set.has(runningtotal))
            return true;
        set.add(runningtotal);
    }

    return false;
};
