const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    callback(db.get(key));
};

const dbSet = (key, value, callback) => {
    console.log(key);
    console.log(db.get(key.id), "get");
    db.set(key.id, key.questions);

    // callback(db.set("3", value.body.questions));
};

const dbDelete = (key, callback) => {
    callback(db.delete(key.id));
};

module.exports = {
    dbGet,
    dbSet,
    dbDelete,
};
