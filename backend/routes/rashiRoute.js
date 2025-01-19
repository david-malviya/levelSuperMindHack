import express from "express";
import { ChatbotLLM, RasiInsight, rasiChart, zodiacData, zodiacSign } from "../controllers/RasiController.js";

const rasiRouter = express.Router();

rasiRouter.post("/rasiInsight", RasiInsight);
rasiRouter.post("/rasiRoute", rasiChart);
rasiRouter.post("/zodiacSign", zodiacSign);
rasiRouter.post("/zodiacData", zodiacData);
rasiRouter.post("/message", ChatbotLLM);



export default rasiRouter;