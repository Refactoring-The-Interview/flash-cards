const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    callback(db.get(key));
};

const dbSet = (key, callback) => {
    callback(db.set(key.id, key.newQuestion));
};

const dbDelete = (key, callback) => {
    callback(db.delete(key.id));
};

module.exports = {
    dbGet,
    dbSet,
    dbDelete,
};
