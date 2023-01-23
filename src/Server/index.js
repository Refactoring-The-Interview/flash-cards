const { dbGet } = require("./DataBase");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    dbGet(req.query, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
