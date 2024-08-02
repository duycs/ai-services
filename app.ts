import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { geminiResponse } from "./controllers/gemini";
import { openaiResponse } from "./controllers/openai";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.post("/gemini", geminiResponse);
app.post("/openai", openaiResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
