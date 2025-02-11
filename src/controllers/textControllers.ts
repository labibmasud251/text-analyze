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

export const getAllTexts = async (req: Request, res: Response) => {
    try {
        const texts = await TextServices.getAllTexts();
        res.status(200).json(texts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getTextById = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const textId = parseInt(id, 10);

        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const text = await TextServices.getTextById(textId);

        if (!text) {
            return res.status(404).json({ error: "Text not found" });
        }

        return res.status(200).json({ text });
    } catch (error) {
        console.error("Error fetching text by ID:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteTextById = async (req:Request, res: Response) : Promise<any>=> {
    try {
        const { id } = req.params;
        const textId = parseInt(id, 10);
        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        if (!text) {
            return res.status(404).json({ error: "Text not found" });
        }

        await TextServices.deleteTextById(textId);
        return res.status(200).json({ message: "Text deleted successfully" });
    }
    catch(error) {
        console.error("Error deleting text by ID:", error);
        return res.status(500).json({ error: "Internal server error" });
        
    }
    
}

export const updateTextById = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const textId = parseInt(id, 10);
        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        if (!text) {
            return res.status(404).json({ error: "Text not found" });
        }
        const { content } = req.body;
        const updatedText = await TextServices.updateTextById(textId, content);
        return res.status(200).json({ updatedText });
    }
    catch(error) {
        console.error("Error updating text by ID:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}