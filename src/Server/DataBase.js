const JSONdb = require("simple-json-db");
const db = new JSONdb("./storage.json");

const dbGet = (key, callback) => {
    db.set("1", "hello world");
    console.log("in db call");

    db.get(key, (err, data) => {
        if (data) {
            console.log(data);
            callback(err);
        } else {
            callback(null, data);
        }
    });
    console.log("after db call");
};

module.exports = {
    dbGet,
};
