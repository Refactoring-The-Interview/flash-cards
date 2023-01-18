import { Difficulty, Question } from "./types";

export let questionBank: Question[] = [
    {
        difficulty: "easy" as Difficulty,
        question:
            "What method is used to method create a new array populated with the results of calling a provided function on every element in the calling array.",
        answer: "Array.map()",
        answers: ["Array.map()", "Array.forEach()", "Array.every()"],
        tags: ["array", "Js"],
        correct: true,
    },
    {
        difficulty: "medium" as Difficulty,
        question:
            "What method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
        answer: "Array.find()",
        answers: ["Array.findIndex()", "Array.findLast()", "Array.find()"],
        tags: ["array", "Js"],
        correct: false,
    },
    {
        difficulty: "medium" as Difficulty,
        question:
            "what method executes a provided function once for each array element.",
        answer: "Array.forEach()",
        answers: ["Array.map()", "Array.forEach()", "Array.every()"],
        tags: ["array", "Js"],
        correct: false,
    },
    {
        difficulty: "medium" as Difficulty,
        question:
            " What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
        answer: "Array.some()",
        answers: ["Array.some()", "Array.filter", "Array.forEach()"],
        tags: ["array", "Js"],
        correct: false,
    },
    {
        difficulty: "medium" as Difficulty,
        question:
            "What method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        answer: "Array.flat()",
        answers: ["Array.flat()", "Array.flatMap()", "Array.concat()"],
        tags: ["array", "Js"],
        correct: false,
    },

    {
        difficulty: "hard" as Difficulty,
        question: "this is a test obj to see if the filter is working.",
        answer: "test1",
        answers: ["test1", "test", "test"],
        tags: ["object", "Js"],
        correct: false,
    },
];
