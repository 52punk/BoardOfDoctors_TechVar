import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRouter from "./router/posts.js";
// CONST VALUES

const URL =
  "mongodb+srv://52punk:52punk2017@cluster0.b19hh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

// INSTANCE FOR EXPRESS
const app = express();

// MIDDLEWARES

app.use(bodyParser.json());
app.use(cors());

// ROUTES

app.use("/posts", postRouter);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at: ${PORT}`));
  })
  .catch((err) => {
    console.log(err.message);
  });
