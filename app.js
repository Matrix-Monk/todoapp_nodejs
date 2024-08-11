import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from './routes/task.js'
import dotenv  from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors"



dotenv.config({
    path: "./data/config.env",
})

export const app = express();



// using middleware
app.use(express.json())

app.use(cookieParser());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))




// Using Routes
app.use("/api/v1/users", userRouter)

app.use("/api/v1/task", taskRouter);




app.use(errorMiddleware)





app.get("/", (req, res) => {
    res.send("Nice working")
    
})




