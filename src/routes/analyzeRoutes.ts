import { Router} from "express";
import * as AnalyzeController from "../controllers/analyzeControllers";

const router = Router();

router.get('/get_word_count/:id', AnalyzeController.getWordCount);
router.get('/get_character_count/:id', AnalyzeController.getCharacterCount);
router.get('/get_sentence_count/:id', AnalyzeController.getSentenceCount);
router.get('/get_paragraph_count/:id', AnalyzeController.getParagraphCount);
router.get('/get_longest_words/:id', AnalyzeController.getLongestWordsInParagraphs);

export default router