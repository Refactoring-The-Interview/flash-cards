const { dbGet } = require("./DataBase");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/question", (req, res) => {
    console.log(req, "hello");
    dbGet("1", (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.get("/user", (req, res) => {
    dbGet(req.query, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
