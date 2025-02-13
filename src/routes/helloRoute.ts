import { Router } from "express";
import { giveHello } from "../controllers/helloController";

const router = Router();

router.get("/", giveHello);

export default router;
