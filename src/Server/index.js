const {
    dbGet,
    dbSetQuestion,
    dbDelete,
    dbUpdateQuestion,
} = require("./DataBase");
const express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(createProxyMiddleware("/api/**", { target: "http://localhost:5000" }));

console.log("in the sever! hello");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Hello server is running").end();
});

app.post("/addToDataBase", (req, res) => {
    dbSetQuestion(req.body.question, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.post("/UPDATEQUESTION", (req, res) => {
    dbUpdateQuestion(req.body.questions, (data, error) => {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(data);
        }
    });
});

app.delete("/deleteItem", (req, res) => {
    dbDelete(req.body.questionId, (data, error) => {
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

// old package scrips, saving incase needed
// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject",
// "prepare": "husky install",
// "env": " yarn && yarn start",
// "server": "cd src && nodemon Server/index.js",

// server built, now tesiting a sever
// "dev": "react-scripts start",
// "start": "serve -s build",
// "build": "react-scripts build",
// "test": "react-scripts test --env=jsdom",
// "eject": "react-scripts eject",
// "heroku-postbuild": "yarn run build",
