import { Difficulty, Question, Tags } from "./types";

export let questionBank: Question[] = [
    {
        difficulty: Difficulty.easy,
        question:
            "What method is used to method create a new array populated with the results of calling a provided function on every element in the calling array.",
        answer: "Array.map()",
        answers: ["Array.map()", "Array.forEach()", "Array.every()"],
        tags: [Tags.array, Tags.js],
        correct: true,
        id: "1",
    },
    {
        difficulty: Difficulty.medium,
        question:
            "What method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
        answer: "Array.find()",
        answers: ["Array.findIndex()", "Array.findLast()", "Array.find()"],
        tags: [Tags.array, Tags.js],
        correct: false,
        id: "2",
    },
    {
        difficulty: Difficulty.medium,
        question:
            "what method executes a provided function once for each array element.",
        answer: "Array.forEach()",
        answers: ["Array.map()", "Array.forEach()", "Array.every()"],
        tags: [Tags.array, Tags.js],
        correct: false,
        id: "3",
    },
    {
        difficulty: Difficulty.medium,
        question:
            " What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
        answer: "Array.some()",
        answers: ["Array.some()", "Array.filter", "Array.forEach()"],
        tags: [Tags.array, Tags.js],
        correct: false,
        id: "4",
    },
    {
        difficulty: Difficulty.medium,
        question:
            "What method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        answer: "Array.flat()",
        answers: ["Array.flat()", "Array.flatMap()", "Array.concat()"],
        tags: [Tags.array, Tags.js],
        correct: false,
        id: "5",
    },

    {
        difficulty: Difficulty.hard,
        question: "this is a test obj to see if the filter is working.",
        answer: "test1",
        answers: ["test1", "test", "test"],
        tags: [Tags.obj, Tags.js],
        correct: false,
        id: "6",
    },
];

// [{"difficulty":"easy","question":"What method is used to method create a new array populated with the results of calling a provided function on every element in the calling array.","answer":"Array.map()","answers":["Array.map()","Array.forEach()","Array.every()"],"tags":["array","Js"],"correct":true,"id":"1"},{"difficulty":"medium","question":"What method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.","answer":"Array.find()","answers":["Array.findIndex()","Array.findLast()","Array.find()"],"tags":["array","Js"],"correct":false,"id":"2"},{"difficulty":"medium","question":"what method executes a provided function once for each array element.","answer":"Array.forEach()","answers":["Array.map()","Array.forEach()","Array.every()"],"tags":["array","Js"],"correct":false,"id":"3"},{"difficulty":"medium","question":" What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.","answer":"Array.some()","answers":["Array.some()","Array.filter","Array.forEach()"],"tags":["array","Js"],"correct":false,"id":"4"},{"difficulty":"medium","question":"What method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.","answer":"Array.flat()","answers":["Array.flat()","Array.flatMap()","Array.concat()"],"tags":["array","Js"],"correct":false,"id":"5"},{"difficulty":"hard","question":"this is a test obj to see if the filter is working.","answer":"test1","answers":["test1","test","test"],"tags":["object","Js"],"correct":false,"id":"6"}]
