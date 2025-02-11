import { Router } from 'express';
import * as TextController from '../controllers/textControllers';

const router = Router();

router.post('/add_text', TextController.createText);
router.get('/get_all_texts', TextController.getAllTexts);
router.get('/get_text/:id', TextController.getTextById);
router.delete('/delete_text/:id', TextController.deleteTextById);
router.post('/update_text/:id', TextController.updateTextById);

export default router;