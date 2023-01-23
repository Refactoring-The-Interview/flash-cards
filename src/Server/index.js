const { dbGet } = require("./DataBase");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    dbGet("1", (data, error) => {
        res.status(200).send(data || error);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
