const express = require("express");


const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); // __dirname means it will always use location of this file to check index file (even if we deploy project to server or another PC)
})


app.listen(3000);