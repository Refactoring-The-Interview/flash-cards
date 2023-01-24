const { dbGet, dbSet } = require("./DataBase");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/setQuestion", (req, res) => {
    console.log(req.body);
    dbSet("1");
});

app.get("/question", (req, res) => {
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
