import { Router } from 'express';
import * as TextController from '../controllers/textControllers';

const router = Router();

router.post('/add_text', TextController.createText);

export default router;