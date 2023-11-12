import express from "express";
const app = express();

import cors from 'cors';
import morgan from "./loggers/morgan_logger";
import router from './router/router';
import mongoose from 'mongoose';


app.use(cors());
app.use(morgan);
app.use(express.json());
app.use(express.text());
app.use("/api", router);

const connectToDatabase = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/');
        console.log('Connected to MongoDB');
    } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    }
}


const PORT = 8181;
connectToDatabase();
app.listen(PORT, () => console.log("server run!"));