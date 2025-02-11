import { Request, Response } from "express";
import * as AnalyzeService from "../services/analyzeServices";
import * as TextServices from "../services/textServices";

const getWordCount = async (req: Request, res:Response) : Promise<any> => {
    try {
        let { id } = req.params;
        let textId = parseInt(id, 10);

        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        const wordCount = await AnalyzeService.countWords(text.content);
        return res.status(200).json({ wordCount });
    }
    catch(error) {
        console.error("Error fetching word count:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const getCharacterCount = async (req: Request, res:Response) : Promise<any> => {
    try {
        let { id } = req.params;
        let textId = parseInt(id, 10);

        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        const characterCount = await AnalyzeService.countCharacters(text.content);
        return res.status(200).json({ characterCount });
    }
    catch(error) {
        console.error("Error fetching character count:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const getSentenceCount = async (req: Request, res:Response) : Promise<any> => {
    try {
        let { id } = req.params;
        let textId = parseInt(id, 10);

        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        const sentenceCount = await AnalyzeService.countSentences(text.content);
        return res.status(200).json({ sentenceCount });
    }
    catch(error) {
        console.error("Error fetching sentence count:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const getParagraphCount = async (req: Request, res:Response) : Promise<any> => {
    try {
        let { id } = req.params;
        let textId = parseInt(id, 10);

        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        const paragraphCount = await AnalyzeService.countParagraphs(text.content);
        return res.status(200).json({ paragraphCount });
    }
    catch(error) {
        console.error("Error fetching paragraph count:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const getLongestWordsInParagraphs = async (req: Request, res:Response) : Promise<any> => {
    try {
        let { id } = req.params;
        let textId = parseInt(id, 10);

        if (isNaN(textId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const text = await TextServices.getTextById(textId);
        const longestWords = await AnalyzeService.longestWordsInParagraphs(text.content);
        return res.status(200).json({ longestWords });
    }
    catch(error) {
        console.error("Error fetching longest words in paragraphs:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export {
    getWordCount,
    getCharacterCount,
    getSentenceCount,
    getParagraphCount,
    getLongestWordsInParagraphs
}