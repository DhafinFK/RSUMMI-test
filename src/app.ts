import express from "express";
import cors from "cors";
import trialRoutes from "./routes/trialRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/trials", trialRoutes);

export default app;
