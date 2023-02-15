const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    callback(db.get(key));
};

const dbSet = (key, value, callback) => {
    callback(db.set(key, value));
};

const dbSetQuestion = (value, callback) => {
    const questions = db.get("questions");
    const newQuestions = [...questions, value];
    try {
        db.set("questions", newQuestions);
    } catch (e) {
        callback(e);
    }

    callback(newQuestions);
};

const dbUpdateQuestion = (value, callback) => {
    const updatedQuestions = value;
    try {
        db.set("questions", updatedQuestions);
    } catch (e) {
        callback(e);
    }
    callback(updatedQuestions);
};

const dbDelete = (key, callback) => {
    const questions = db.get("questions");
    const newQuestions = questions.filter((questions) => {
        return questions.id !== key;
    });

    try {
        db.set("questions", newQuestions);
    } catch (e) {
        callback(e);
    }
    callback(newQuestions);
};

module.exports = {
    dbGet,
    dbSet,
    dbDelete,
    dbSetQuestion,
    dbUpdateQuestion,
};
