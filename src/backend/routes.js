import express from 'express';
import { get_hotel_chain, get_hotel_chain_by_id, get_hotel_chain_ids, get_hotel_by_filters} from './controller.js';

const router = express.Router();

router.get('/', get_hotel_chain);
router.get('/ids', get_hotel_chain_ids);
router.get('/:id', get_hotel_chain_by_id);
router.get('/hotel/:chain_id/:address/:rating', get_hotel_by_filters);

export default router;
