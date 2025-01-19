import express from "express"
import cors from "cors";
import "dotenv/config";
import connectDB from './database/mongodb.js'
import userRouter from "./routes/userRoute.js";
import rasiRouter from "./routes/rashiRoute.js";


const app = express()
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cors({
  origin: "*", 
  credentials: true 
}));

app.use("/api/user", userRouter);
app.use("/api", rasiRouter);

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });