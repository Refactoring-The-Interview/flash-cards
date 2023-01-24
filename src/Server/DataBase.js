const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    callback(db.get(key));
};

const dbSet = (key, value, callback) => {
    callback(db.set(key, value));
};

const dbDelete = (key, value, callback) => {
    callback(db.delete(key));
};

const dbReplaceAllData = (key, callback) => {
    callback(db.JSON(key));
};

module.exports = {
    dbGet,
    dbSet,
    dbDelete,
    dbReplaceAllData,
};
