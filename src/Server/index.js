const { dbGet } = require("./DataBase");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    console.log("hit api");
    dbGet("1", (data, error) => {
        console.log(data, "dbGet");
        res.status(400).send(data);
    });
    console.log("after call");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
