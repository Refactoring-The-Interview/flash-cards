export enum Paths {
    question = "/question/:questionId",
    questionList = "/question-list",
    login = "/login",
    home = "/home",
    contact = "/contact",
}

export const pathGenerator = {
    [Paths.question]: (questionId: string) => `/question/${questionId}`,
};
