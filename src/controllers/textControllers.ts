import { Request, Response } from "express";
import * as TextServices from "../services/textServices";


export const createText = async (req: Request, res: Response) => {
    try {
        const { content } = req.body;
        console.log(`This is the req body ${content}`);
        const newText = await TextServices.createText(content);
        res.status(201).json(newText);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
