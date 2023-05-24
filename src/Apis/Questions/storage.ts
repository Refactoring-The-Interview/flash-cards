export enum FlashCardStyle {
    MultipleChoice = 0,
    CodeBlock = 1,
}

export interface Question {
    difficulty: Difficulty;
    question: string;
    answer: string;
    answers: string[];
    tags: Tags[];
    correct: boolean;
    id: string;
    style: FlashCardStyle;
    code?: string;
}

export enum Difficulty {
    none = "",
    easy = "easy",
    medium = "medium",
    hard = "hard",
}

export enum Tags {
    js = "js",
    obj = "object",
    array = "array",
    codeblock = "codeblock",
}

class Storage {
    public questions: Question[] = [
        {
            difficulty: Difficulty.easy,
            question:
                "What method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.",
            answer: "Array.at()",
            answers: ["Array.find()", "Array.at()", "Array.values()"],
            tags: [Tags.array],
            correct: true,
            id: "2",
            style: 0,
        },
        {
            difficulty: Difficulty.easy,
            question:
                "What method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
            answer: "Array.concat()",
            answers: ["Array.concat()", "Array.reduce()", "Array.merge()"],
            tags: [Tags.array],
            correct: true,
            id: "3",
            style: 0,
        },
        {
            difficulty: Difficulty.easy,
            question:
                "What method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
            answer: "Array.filter()",
            answers: ["Array.filter()", "Array.some()", "Array.reduce()"],
            tags: [Tags.array],
            correct: true,
            id: "8",
            style: 0,
        },
        {
            difficulty: Difficulty.easy,
            question:
                " What static method returns an array of a given object's own enumerable string-keyed property names.",
            answer: "Object.keys()",
            answers: ["Object.keys()", "Object.values()", "Object.hasOwn()"],
            tags: [Tags.obj],
            correct: true,
            id: "11",
            style: 0,
        },
        {
            difficulty: Difficulty.easy,
            answer: "isPrime",
            question:
                "const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];\n function isPrime(num) {\n      //Return An Array of Only Prime Numbers \n}",
            answers: [
                "//This is A solution to the question.\nconst array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];\n function isPrime(num) {\n      for (let = 2; num > i; i++) {\n         if (num % i === 0) {\n      return false;\n         }\n     }\n    return num > 1;\n  }\n console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]",
            ],
            tags: [Tags.array, Tags.codeblock],
            correct: false,
            id: "13",
            style: 1,
        },
        {
            difficulty: Difficulty.easy,
            answer: "multiplyEach",
            question:
                "const array = [1, 4, 9, 16];\n function multiplyEach(array) {\n      //use Array.map() to return an array of numbers all multiplied by 2 \n}",
            answers: [
                "//This is A solution to the question.\nconst array = [1, 4, 9, 16];\n function multiplyEach(array) {\n  return array.map(x => x * 2)     \n}",
            ],
            tags: [Tags.array, Tags.codeblock],
            correct: false,
            id: "14",
            style: 1,
        },
        {
            difficulty: Difficulty.easy,
            question:
                "// use array.findIndex()to find the index where the element is greater than 13\nconst array = [5, 12, 8, 130, 44];\n\n\n// expected result 3",
            answer: "Find Index",
            answers: [
                "const array = [5, 12, 8, 130, 44];\n\nconst isLargeNumber = (element) => element > 13;\n\narray.findIndex(isLargeNumber));\n// Expected output: 3\n",
            ],
            tags: [Tags.array, Tags.codeblock],
            correct: false,
            id: "17",
            style: 1,
        },
        {
            difficulty: Difficulty.medium,
            question:
                " What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
            answer: "Array.some()",
            answers: ["Array.some()", "Array.filter", "Array.forEach()"],
            tags: [Tags.array, Tags.js],
            correct: true,
            id: "1",
            style: 0,
        },
        {
            difficulty: Difficulty.medium,
            question:
                "What method shallow copies part of an array to another location in the same array and returns it without modifying its length.",
            answer: "Array.copyWithin()",
            answers: ["Array.concat()", "Array.copyWithin()", "Array.merge()"],
            tags: [Tags.array],
            correct: true,
            id: "4",
            style: 0,
        },
        {
            difficulty: Difficulty.medium,
            question:
                "What method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
            answer: "Array.every()",
            answers: ["Array.every()", "Array.forEach()", "Array.map()"],
            tags: [Tags.array],
            correct: true,
            id: "6",
            style: 0,
        },
        {
            difficulty: Difficulty.medium,
            question:
                "What method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
            answer: "Array.filter()",
            answers: ["Array.filter()", "Array.reduce()", "Array.forEach()"],
            tags: [Tags.array],
            correct: true,
            id: "7",
            style: 0,
        },
        {
            difficulty: Difficulty.medium,
            question:
                "What method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.",
            answer: "Array.findLast()",
            answers: [
                "Array.findLast()",
                "Array.findLastIndex()",
                "Array.find()",
            ],
            tags: [Tags.array],
            correct: true,
            id: "9",
            style: 0,
        },
        {
            difficulty: Difficulty.medium,
            question:
                " What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
            answer: "Array.some()",
            answers: ["Array.some()", "Array.filter", "Array.forEach()"],
            tags: [Tags.array, Tags.js, Tags.codeblock],
            correct: true,
            id: "10",
            style: 0,
        },
        {
            difficulty: Difficulty.medium,
            answer: "reverseString",
            question:
                "const reverseString = () => { \n const = 'Hello'\n   //Return a string reversed so Hello => olleH \n } ",
            answers: [
                "const reverseString = () => { \n const string = 'Hello'\n  return string.split('').reverse().join('') \n } ",
            ],
            tags: [Tags.array, Tags.codeblock],
            correct: false,
            id: "15",
            style: 1,
        },
        {
            difficulty: Difficulty.medium,
            question:
                "// use array.slice() to filter out the number 4 out of the array.\nlet array = [1,4,2,3,4,12,15,0,NaN,'hello',4]\n\n// expected result [1,2,3,,12,15,0,NaN,'hello']",
            answer: "Filter using Slice",
            answers: [
                "let array = [1,4,2,3,4,12,15,0,NaN,'hello',4]\n\n\n  for (let i = 0; i < array.length; i+=1) {\n    if (array[i] === 4) {\n      array = [...array.slice(0, i), ...array.slice(i+1, array.length)]\n    }\n  }\n \nconsole.log(array)\n  // expected [ 1, 2, 3, 12, 15, 0, NaN, 'hello' ]",
            ],
            tags: [Tags.array, Tags.codeblock],
            correct: false,
            id: "18",
            style: 1,
        },
        {
            difficulty: Difficulty.hard,
            question:
                "What method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
            answer: "Array.entries()",
            answers: ["Array.entires()", "Array.every()", "Array.values()"],
            tags: [Tags.array],
            correct: false,
            id: "5",
            style: 0,
        },
        {
            difficulty: Difficulty.hard,
            question:
                "What static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, write ability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.",
            answer: "Object.freeze()",
            answers: ["Object.freeze()", "Object.create()", "Object.isFrozen"],
            tags: [Tags.obj],
            correct: true,
            id: "12",
            style: 0,
        },
        {
            difficulty: Difficulty.hard,
            question:
                'const emailValidation = (email) => {\n  // given an email string validate that the email has 3 chars before the @ symbol and a "." symbol after the @.\n\n}',
            answer: "emailValidation",
            answers: [
                "const emailValidation = (email) => {\n  const atSymbol = email.indexOf('@');\n  const dotSymbol = email.indexOf('.') > atSymbol\n\n  return atSymbol > 3 && dotSymbo\n}",
            ],
            tags: [Tags.array, Tags.codeblock],
            correct: false,
            id: "16",
            style: 1,
        },
        {
            difficulty: Difficulty.hard,
            question:
                'A phrase is a palindrome if, after converting all uppercase letters into \nlowercase letters and removing all non-alphanumeric characters, \nit reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.\n\n \n\nExample 1:\n\nInput: s = "A man, a plan, a canal: Panama"\nOutput: true\nExplanation: "amanaplanacanalpanama" is a palindrome.',
            answer: "isPalindrome",
            answers: [
                "function isPalindrome(string) {\n  let right = string.length-1;\n  let left = 0;\n\n   \n\n  while (left < right) {\n    if (string[left] !== string[right]) return false\n\n    right -=1;\n    left +=1;\n\n  }\n\n\n  return true;\n}",
            ],
            tags: [Tags.codeblock, Tags.array],
            correct: false,
            id: "19",
            style: 1,
        },
    ];

    public addQuestion(question: any) {
        this.questions.push(question);
        return this.questions;
    }

    public deleteQuestion(questionId: string) {
        const index = this.questions.findIndex((q) => q.id === questionId);
        this.questions.splice(index, 1);
        return this.questions;
    }

    public updateQuestions(questions: any) {
        this.questions = questions;
        return this.questions;
    }

    public getQuestions() {
        return this.questions;
    }
}

export const storage = new Storage();
