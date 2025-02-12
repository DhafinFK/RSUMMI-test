import { Router } from "express";
import { getTrialsList } from "../controllers/trialController";

const router = Router();

router.get("/", getTrialsList);

export default router;
