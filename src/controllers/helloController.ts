import { Request, Response } from "express";

export const giveHello = (_: Request, res: Response) => {
    res.status(200).json("Hello World");
}
