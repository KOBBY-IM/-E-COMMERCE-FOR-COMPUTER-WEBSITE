const PORT = process.env.PORT
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const api = process.env.API_URL;

dotenv.config();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, (error) => {
    if (!error) {
        console.log(`listening on port ${PORT}`);
    }
    else {
        console.log(`Error: `+error);
    }
})


// mongodb connection
mongoose.connect(process.env.MONGO_COMM)
   .then(() => {
        console.log("connected to mongodb");
    })
    .catch((error) => {
        console.log(error);
    })

app.get(`${api}/products`, (req, res) => {
    const products = {
        id: 1,
        name: 'computer',
        image: 'some_url',
    }
    res.send("e-commerce app backend started");
})