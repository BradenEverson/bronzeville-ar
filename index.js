const cors = require("cors");
const path = require("path");
const express = require("express");

var app = express();

app.use(cors());
app.use(express.static(__dirname + "/web"));
app.use(express.static(__dirname + "/models"));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, "/web/index.html"));
});


app.listen(5000, ()=>{
    console.log("We soooooo ready on port 5000");
});