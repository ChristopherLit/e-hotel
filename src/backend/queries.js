
const hotel_chain_query = 'SELECT * FROM hotel_chain'
const hotel_chain_ids_query = 'SELECT chain_id, name, office_address FROM hotel_chain'
const hotel_chain_by_id_query = 'SELECT * FROM hotel_chain WHERE chain_id = $1'
const customer_ssn_query = 'SELECT customer_ssn_sin FROM customer WHERE customer_ssn_sin = $1'
const employee_ssn_query = 'SELECT employee_ssn_sin FROM employee WHERE employee_ssn_sin = $1'
const room_query = 'SELECT * FROM room WHERE';
const insert_booking_query = 'INSERT INTO booking_renting (start_date, end_date, payment, credit_card, employee_ssn_sin, hotel_id, room_number) VALUES ($1, $2, $3, $4, $5, $6, $7)';


export { hotel_chain_query, 
            hotel_chain_ids_query,
            hotel_chain_by_id_query,
            customer_ssn_query,
            employee_ssn_query,
            room_query,
            insert_booking_query,
}