import express from 'express';
import { get_hotel_chain, get_hotel_chain_by_id, get_hotel_chain_ids, get_hotel_by_filters, get_customer_ssn, get_employee_ssn, get_rooms_by_filters} from './controller.js';

const router = express.Router();

router.get('/', get_hotel_chain);
router.get('/ids', get_hotel_chain_ids);
router.get('/:id', get_hotel_chain_by_id);
router.get('/hotel/:chain_id/:address/:rating', get_hotel_by_filters);
router.get('/ssnEmployee', get_employee_ssn);
router.get('/ssnCustomer', get_customer_ssn);
router.get('/rooms/:chain_id/:address/:rating', get_rooms_by_filters);

export default router;
