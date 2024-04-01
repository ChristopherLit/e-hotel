const hotel_chain_query = 'SELECT * FROM hotel_chain'
const hotel_chain_ids_query = 'SELECT chain_id, name, office_address FROM hotel_chain'
const get_hotel_cities_query = 'SELECT DISTINCT address AS city FROM hotel';
const hotel_chain_by_id_query = 'SELECT * FROM hotel_chain WHERE chain_id = $1'
const customer_ssn_query = 'SELECT customer_ssn_sin FROM customer WHERE customer_ssn_sin = $1'
const employee_ssn_query = 'SELECT employee_ssn_sin FROM employee WHERE employee_ssn_sin = $1'
const room_query = 'SELECT * FROM room WHERE'
const insert_booking_query = 'INSERT INTO booking_renting (start_date, end_date, payment, credit_card, customer_ssn_sin, hotel_id, room_number) VALUES ($1, $2, $3, $4, $5, $6, $7)';
const hotel_chain_count_query = 'SELECT COUNT(*) AS total_hotel_chains FROM hotel_chain'
const hotel_count_query = 'SELECT COUNT(*) AS total_hotels FROM hotel'
const delete_booking_query = `DELETE FROM booking_renting WHERE booking_renting_id = $1`;
const update_booking_query = `UPDATE booking_renting 
                              SET credit_card = $1 
                              WHERE customer_ssn_sin = $2 AND hotel_id = $3 AND room_number = $4`;

const view_rooms_per_area_query = 'SELECT full_address, num_rooms FROM rooms_per_city';
;
const get_aggregatedCapacity_query = `
SELECT SUM(capacity) AS aggregated_capacity
FROM room
WHERE hotel_id = $1;
`;

const create_customer_query = `INSERT INTO customer (customer_ssn_sin, first_name, last_name, registration_date) VALUES ($1, $2, $3, $4)`;
const revenue_query = `SELECT revenue FROM total_revenue where id = 1`;


export { hotel_chain_query, 
            hotel_chain_ids_query,
            hotel_chain_by_id_query,
            customer_ssn_query,
            employee_ssn_query,
            room_query,
            insert_booking_query,
            hotel_chain_count_query,
            hotel_count_query,
            delete_booking_query,
            update_booking_query,
            view_rooms_per_area_query,
            get_hotel_cities_query,
            get_aggregatedCapacity_query,
            create_customer_query,
            revenue_query
}