const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')

const app = express();
const {getCompliment, getFortune, getValentineMsg, getNYWish, getZodSign} = ctrl

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/valentine", getValentineMsg)
app.get("/api/newyear", getNYWish)
app.get("/api/zodiac/:value", getZodSign)


app.listen(4000, () => console.log("Server running on 4000"));
