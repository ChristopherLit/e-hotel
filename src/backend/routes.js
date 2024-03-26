import express from 'express';
import { get_hotel_chain, get_hotel_chain_by_id, get_hotel_chain_ids} from './controller.js';

const router = express.Router();

router.get('/', get_hotel_chain);
router.get('/ids', get_hotel_chain_ids);
router.get('/:id', get_hotel_chain_by_id);

export default router;
