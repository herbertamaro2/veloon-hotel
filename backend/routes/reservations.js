import express from 'express';
import { addReservation, list } from '../controllers/reservations/ReservationController.js';

const router = express.Router();

router.get('/list/:dateFrom/:dateTo', list);
router.post('/add', addReservation);

export default router;
