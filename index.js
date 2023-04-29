import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3001;

const connect = () => {
    mongoose.connect("mongodb+srv://medeveshsharma23:dJ5ZqXqSDkANHaN1@cluster0.4ueebzx.mongodb.net/test")
    .then(() => console.log('database connected successully'))
    .catch((err) => { throw (err) });
}

app.listen(PORT, () => {
    connect();
    console.log(`PORT is succesfully running on ${PORT}`);
});