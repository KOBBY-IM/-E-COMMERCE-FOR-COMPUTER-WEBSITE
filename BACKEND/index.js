const PORT = 3000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const bcrypt = require("bcrypt"); // Added import statement for bcrypt
const upload = multer(); // Added import statement for multer (upload)

// Environment variables
dotenv.config();


// MongoDB connection
mongoose.connect("mongodb+srv://<Mark Muriithi>:<75NfKey.5RffjF8>@cluster0.kn2ib6r.mongodb.net/e-commerce")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });

// Middleware
app.use(express.json());

// Routes
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



// Start the server
app.get("/", (req, res)=>{
    res.send("Express App is running")
})


app.listen(PORT, (error)=>{
    if (!error) {
        console.log("server Running on Port"+PORT)
    }
    else
    {
        console.log("Error : "+error)
    }
})

// Image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, '${file.fieldname}_${Date.now()}${path.extname(file.originalname)')
    }
})

// Creating upload endpoint for image
app.use('/images', express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:'http://localhost:${port}/images/${req.file.filename}'
    })
})
