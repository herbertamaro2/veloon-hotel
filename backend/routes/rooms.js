import express from 'express';
import { addRoom, list } from '../controllers/rooms/RoomsController.js';

const router = express.Router();

router.get('/list/:dateFrom/:dateTo', list);
router.post('/add', addRoom);

export default router;
