const { dbGet, dbSetQuestion, dbDelete } = require("./DataBase");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/addToDataBase", (req, res) => {
    dbSetQuestion(req.body.question, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.delete("/deleteItem", (req, res) => {
    dbDelete(req.body, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.get("/questions", (req, res) => {
    dbGet("questions", (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.post("/user", (req, res) => {
    dbGet(req.body, (data, error) => {
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
