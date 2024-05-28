const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");

// Environment variables
dotenv.config();

const PORT = process.env.PORT || 3000

// MongoDB connection
mongoose.connect(process.env.MONGO_COMM)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });

// Middleware
app.use(express.json());

// Routes

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



// Start the server
app.listen(PORT, () =>{
        console.log(`Listening on port ${PORT}`);
});
