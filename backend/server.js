import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";
import dotEnv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
dotEnv.config();
const db = process.env.mongoose_uri;

mongoose
  .connect(db)
  .then(() => {
    console.log("mongodb is connected successfully");
  })
  .catch((err) => {
    console.log("there is an error:", err);
  });

app.get("/",(req,res)=>{
  return res.send("Backend is running")
})

app.use("/users", userRoutes);


app.listen(port, (err) => {
  if (!err) {
    console.log(`server is created and running at http://localhost:${port}`);
  } else {
    console.log("there is an error", err);
  }
});
