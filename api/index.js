import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`Connected to the DB`);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log(`server is running on 3000`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
