import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import roomRoutes from './routes/rooms.js';
import reservationRoutes from './routes/reservations.js';

dotenv.config();

const app = express();

// Use middleware
app.use(cors());
app.use(express.json());


app.use('/rooms', roomRoutes);
app.use('/reservation', reservationRoutes);


export default app;
