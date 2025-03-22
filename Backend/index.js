const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())
app.use(cors());
require("dotenv").config()

// database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected successfully")
}).catch((err) => {
 console.log(err)
})


app.get("/", (req, res) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("server is running at port" + PORT)
})