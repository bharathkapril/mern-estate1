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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
