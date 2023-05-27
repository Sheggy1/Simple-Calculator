const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



//

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html"); // __dirname means it will always use location of this file to check index file (even if we deploy project to server or another PC)
})




app.post("/", function(req, res) {

    let weight  = Number(req.body.bminum1);
    let height  = Number(req.body.bminum2);

    let resulted = weight + height;

    
    res.send("Your BMI is " + resulted)
})




app.listen(3000);