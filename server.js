
// Enabling Enviromental Variables

import dotenv from "dotenv"
dotenv.config()


// Import Dependencies

import express from "express"
import methodOverride from "method-override"
import cors from "cors"
import morgan from "morgan"
import mongoose from "mongoose"
import session from 'express-session'
import MongoStore from 'connect-mongo'


// Global Variables & Controller Instantiation

const PORT = process.env.PORT || 3333
const MONGO_URI = process.env.MONGO_URI

// MongoDB Connection
mongoose.connect(MONGO_URI)

mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disonnected from Mongo"))
.on("error", (error) => console.log(error))


// Model Objects

 import Todo  from'./model/Todo.js';
 import User from'./model/User.js';

// Creating Application Object

const app = express()


// Routers
import todoRouter from "./Routes/todoRouter.js"
import userRouter from "./Routes/userRouter.js"

// Global Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride("_method"))
app.use("/static", express.static("static"))
// app.use(morgan("tiny"))
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: MONGO_URI }),
    resave: false,
    saveUninitialized: true
  }));
app.use((req, res, next) => {
    req.models = {
        Todo,
        User
    }
    next()
})
// seting up route
app.use("/", userRouter)
app.use("/", todoRouter)

// Router Specific Middleware
todoRouter.use((req, res, next) => {
    if (req.session.loggedIn){
        next()
    }else {
        res.redirect("/")
    }
})


// Server Listener

app.listen(PORT, () => console.log(`👂Listening on Port ${PORT}👂`))