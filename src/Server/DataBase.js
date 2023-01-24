const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    db.set("1", "hello world");
    callback(db.get(key));
};

module.exports = {
    dbGet,
};
