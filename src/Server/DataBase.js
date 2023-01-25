const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    callback(db.get(key));
};

const dbSet = (key, value, callback) => {
    callback(db.set(key, value));
};

const dbDelete = (key, callback) => {
    callback(db.delete(key.id));
};

module.exports = {
    dbGet,
    dbSet,
    dbDelete,
};
