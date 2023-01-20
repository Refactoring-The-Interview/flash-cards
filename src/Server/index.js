const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../public")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});
app.get("/server", (req: any, res: any) => {
    res.send("Hello World! from server");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
