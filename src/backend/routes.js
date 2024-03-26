import express from 'express';
import { get_hotel_chain } from './controller.js';

const router = express.Router();

router.get('/', get_hotel_chain);

export default router;
