import { Request, Response } from "express";
import { getTrialList } from "../services/trialService";

export const getTrialsList = (req: Request, res: Response) => {
    const lst = getTrialList();
    res.status(200).json(lst);
}
