import { Router} from "express";
import * as AnalyzeController from "../controllers/analyzeControllers";

const router = Router();

router.get('/get_word_count', AnalyzeController.getWordCount);
router.get('/get_character_count', AnalyzeController.getCharacterCount);
router.get('/get_sentence_count', AnalyzeController.getSentenceCount);
router.get('/get_paragraph_count', AnalyzeController.getParagraphCount);
router.get('/get_longest_words', AnalyzeController.getLongestWordsInParagraphs);