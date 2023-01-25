const { dbGet, dbSet, dbDelete } = require("./DataBase");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/addToDataBase", (req, res) => {
    dbSet(req.body, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.post("/delete", (req, res) => {
    dbDelete(req.body, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.post("/question", (req, res) => {
    dbGet(req.body, (data, error) => {
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
