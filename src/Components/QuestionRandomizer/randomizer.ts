export const randomizer = (array: any) => {
    const randomElement = Math.floor(Math.random() * array.length);
    const result = array[randomElement];
    result.answers = result.answers.sort(() => Math.random() - 0.5);
    return result;
};
