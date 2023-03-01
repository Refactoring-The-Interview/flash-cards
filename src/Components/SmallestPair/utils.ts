export const smallestNumberPairing = (nums1: number[], nums2: number[]) => {
    let smallestSeen = Number.MAX_SAFE_INTEGER;
    let resultPair: number[] = [];

    nums1.forEach((num) => {
        nums2.forEach((num2) => {
            const isZero = Math.abs(num - num2);
            if (isZero < smallestSeen) {
                smallestSeen = isZero;
                resultPair = [num, num2];
            }
        });
    });
    return resultPair;
};
