import express from 'express';
import { get_hotel_chain, get_hotel_chain_by_id, get_hotel_chain_ids, get_hotel_by_filters, check_customer_ssn, 
    check_employee_ssn, get_rooms_by_filters, process_payment, get_hotel_chain_count, 
    get_hotel_count, delete_booking, update_booking, create_customer_account, getTotalRevenue } from './controller.js';

const router = express.Router();

router.get('/', get_hotel_chain);
router.get('/ids', get_hotel_chain_ids);
router.get('/:id', get_hotel_chain_by_id);
router.get('/hotel/:chain_id/:address/:rating', get_hotel_by_filters);
router.get('/rooms/:hotel_id/:price/:capacity/:startDate/:endDate', get_rooms_by_filters);
router.get('/hotelchain/count', get_hotel_chain_count);
router.get('/hotel/count', get_hotel_count);

router.post('/revenue', getTotalRevenue);
router.post('/check/ssnemployee/:ssn', check_employee_ssn);
router.post('/check/ssncustomer/:ssn', check_customer_ssn);
router.post('/payment', process_payment);
router.post('/update', update_booking)
router.post('/create/customer', create_customer_account);

router.delete('/delete/:booking_renting_id', delete_booking)

export default router;
