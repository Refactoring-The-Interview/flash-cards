const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key) => {
    db.set("1", "hello world");
    console.log("in db");
    return db.get(key, (err, data) => {
        if (err) {
            // eslint-disable-next-line no-undef
            callback(err);
        } else {
            // eslint-disable-next-line no-undef
            callback(null, data);
        }
    });
};

module.exports = {
    dbGet,
};
