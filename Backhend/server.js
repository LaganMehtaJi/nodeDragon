import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";



dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const data = fs.readFileSync("data.json","utf-8") ; 
  res.send(JSON.parse(data)); // no need to parse, already imported as JSON
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
