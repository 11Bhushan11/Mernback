import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
// it will connect frontend to backend 
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import applicationRouter from './routes/applicationRouter.js'
import jobRouter from './routes/jobRouter.js'
// import userRouter from './routes/userRouter.js'
import user from "./routes/userRouter.js";
import { errorMiddleware } from './middlewares/error.js';

// const cors = require("cors")
const app = express();
dotenv.config({path:"./config/config.env"})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// jaha pe middleware use karte hai app.use call karate hai 
app.use(cookieParser());
app.use(
    cors({
    origin : process.env.FRONTEND_URL,
    credentials : true,
    methods : ["GET", "POST", "DELETE", "PUT"],
})
);
// app.use(cors());

// string ko json me convert kar deta hai 

app.use(
    fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    })
);

app.use('/api/v1', user);
app.use('/api/v1/application', applicationRouter);
app.use('/api/v1/job', jobRouter);



//error middleware should be used in last 
// call na karaye 
export default app;
app.get("/",(req,res) => 
res.send (
    `<h1>Backend is working <a href= ${process.env.FRONTEND_URL}>here</a>to go to Frontend</h1>`
))
app.use(errorMiddleware);
