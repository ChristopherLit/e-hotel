import express from 'express';
import { get_hotel_chain, get_hotel_chain_by_id, get_hotel_chain_ids, get_hotel_by_filters, check_customer_ssn, check_employee_ssn, get_rooms_by_filters } from './controller.js';

const router = express.Router();

router.get('/', get_hotel_chain);
router.get('/ids', get_hotel_chain_ids);
router.get('/:id', get_hotel_chain_by_id);
router.get('/hotel/:chain_id/:address/:rating', get_hotel_by_filters);
router.get('/rooms/:hotel_id/:price/:capacity/:startDate/:endDate', get_rooms_by_filters);
router.post('/check/ssnemployee/:ssn', check_employee_ssn);
router.post('/check/ssncustomer/:ssn', check_customer_ssn);
router.post('/payment', process_payment);

export default router;
