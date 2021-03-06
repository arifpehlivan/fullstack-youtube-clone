import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(()=> {
        console.log("Connected to DB");
    }).catch((err) => {
        throw err;
    });
}

app.listen(8000,() => {
    connect();
    console.log(`http://localhost:8000`);
})

