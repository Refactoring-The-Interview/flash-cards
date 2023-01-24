const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    db.set("1", "hello world");
    callback(db.get(key));
};

const dbSet = (key, callback) => {
    console.log(key);
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
