import express from "express";
import cors from "cors";
import trialRoutes from "./routes/trialRoutes";
import helloRoute from "./routes/helloRoute";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/trials", trialRoutes);
app.use("/", helloRoute);

export default app;
