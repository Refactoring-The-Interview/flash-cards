const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const bodyParser = require("body-parser");

// app.use(express.static(path.resolve(__dirname, "../public")));

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../public", "index.html"));
// });

app.use(express.static(path.resolve("public", "index.html")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/server", (req: any, res: any) => {
    if (res.status === 500) {
        res.send(res.status());
    } else {
        res.status(200).send("Hello World! from server");
    }
    // res.status(200).send("Hello World! from server");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
