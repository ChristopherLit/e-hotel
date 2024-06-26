import pool from '../../db.js';
import { hotel_chain_query, hotel_chain_by_id_query, hotel_chain_ids_query, customer_ssn_query, employee_ssn_query, 
    room_query, insert_booking_query, hotel_chain_count_query, hotel_count_query, delete_booking_query, 
    update_booking_query, view_rooms_per_area_query, get_hotel_cities_query, get_aggregatedCapacity_query,
    create_customer_query, revenue_query } from './queries.js';


const get_hotel_chain = (req, res) => {
    pool.query(hotel_chain_query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const get_hotel_chain_ids = (req, res) => {
    pool.query(hotel_chain_ids_query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const get_hotel_chain_by_id = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(hotel_chain_by_id_query, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
}

const get_hotel_by_filters = (req, res) => {
    const { chain_id, address, rating } = req.params;

    let query = 'SELECT * FROM hotel WHERE true';
    let queryParams = [];

    if (chain_id !== 'any') {
        query += ' AND chain_id = $' + (queryParams.length + 1);
        queryParams.push(parseInt(chain_id, 10));
    }

    if (address !== 'any') {
        query += ' AND address LIKE $' + (queryParams.length + 1);
        queryParams.push(`%${address}%`);
    }

    if (rating !== 'any') {
        query += ' AND rating = $' + (queryParams.length + 1);
        queryParams.push(parseInt(rating, 10));
    }

    pool.query(query, queryParams, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const create_customer_account = (req, res) => {
    const { customer_ssn_sin, first_name, last_name } = req.body;
    const currentDate = new Date().toISOString().slice(0, 10);
    pool.query(customer_ssn_query, [customer_ssn_sin], (error, results) => {
        if (results.rows.length) {
            res.status(400).json({ message: 'Customer account already exists.' });
        }
        else
        {
            pool.query(create_customer_query, [customer_ssn_sin, first_name, last_name, currentDate], (error, results) => {
                if (error) {
                    return res.status(500).json({ error: error.message });
                }
                res.status(201).json({ message: 'Customer account created successfully.' });
            });
        }
    });
};

const check_customer_ssn = (req, res) => {
    const { ssn } = req.params;
    pool.query(customer_ssn_query, [ssn], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        const authorized = results.rows.length > 0; 
        res.status(200).json({ authorized });
    });
};

const check_employee_ssn = (req, res) => {
    const { ssn } = req.params;

    pool.query(employee_ssn_query, [ssn], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        const authorized = results.rows.length > 0; 
        res.status(200).json({ authorized });
    });
};

const get_rooms_by_filters = (req, res) => {
    const { hotel_id, price, capacity, startDate, endDate } = req.params;

    let query = 'SELECT * FROM room WHERE true';
    let queryParams = [];

    if (hotel_id !== 'any') {
        query += ' AND hotel_id = $' + (queryParams.length + 1);
        queryParams.push(parseInt(hotel_id, 10));
    }

    if (price !== 'any') {
        query += ' AND price <= $' + (queryParams.length + 1);
        queryParams.push(parseInt(price, 10));
    }

    if (capacity !== 'any') {
        query += ' AND capacity = $' + (queryParams.length + 1);
        queryParams.push(parseInt(capacity, 10));
    }

    if (startDate !== 'any' && endDate !== 'any') {
        query += ` AND room_number NOT IN (
            SELECT room_number FROM booking_renting 
            WHERE start_date < $${queryParams.length + 2} AND end_date > $${queryParams.length + 1}
        )`;
        queryParams.push(startDate, endDate);
    }

    pool.query(query, queryParams, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const process_payment = (req, res) => {
    const { start_date, end_date, payment, credit_card, customer_ssn_sin, hotel_id, room_number } = req.body;
    
    // console.log('start_date:', start_date);
    // console.log('end_date:', end_date);
    // console.log('payment:', payment);
    // console.log('credit_card:', credit_card);
    // console.log('customer_ssn_sin:', customer_ssn_sin);
    // console.log('hotel_id:', hotel_id);
    // console.log('room_number:', room_number);
    
    pool.query(insert_booking_query, [start_date, end_date, payment, credit_card, customer_ssn_sin, hotel_id, room_number], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ message: 'Booking data inserted successfully.' });
    });
};

const get_hotel_chain_count = (req, res) => {
    pool.query(hotel_chain_count_query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const get_hotel_count = (req, res) => {
    pool.query(hotel_count_query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const delete_booking = (req, res) => {
    const { booking_renting_id } = req.params;
    
    pool.query(delete_booking_query, [booking_renting_id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        if (results.rowCount === 1) {
            // Booking successfully deleted
            res.status(200).json({ deleted: true });
        } else {
            // Booking not found or already deleted
            res.status(404).json({ deleted: false });
        }
    });
};

const update_booking = (req, res) => {
    const { booking_renting_id, credit_card } = req.body;
    
    pool.query(update_booking_query, [credit_card, booking_renting_id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        if (results.rowCount === 1) {
            // Booking credit card successfully updated
            res.status(200).json({ updated: true });
        } else {
            // Booking not found or credit card not updated
            res.status(404).json({ updated: false });
        }
    });
};

const get_rooms_per_area = (req, res) => {
    // Execute the query
    pool.query(view_rooms_per_area_query, (error, results) => {

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        
        // Return the results from the view
        res.status(200).json(results.rows);
    });
};

const get_hotel_cities = (req, res) => {
    pool.query(get_hotel_cities_query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
     
        res.status(200).json(results.rows);
    });
};


const get_aggregatedCapacity = (req, res) => {
    const hotel_id = parseInt(req.params.hotel_id);

    pool.query(get_aggregatedCapacity_query, [hotel_id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }

        // Check if results are empty
        if (results.rows.length === 0) {
            // Return 0 as aggregated capacity without throwing an error
            return res.status(200).json({ aggregatedCapacity: 0 });
        }

        // Return the aggregated capacity
        res.status(200).json({ aggregatedCapacity: results.rows[0].aggregated_capacity });
    });
};


const getTotalRevenue = (req, res) => {
    pool.query(revenue_query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }

        const totalRevenue = results.rows.length > 0 ? results.rows[0].revenue : 0;
        res.status(200).json({ totalRevenue });
    });
};

export { get_hotel_chain, get_hotel_chain_by_id, get_hotel_by_filters, get_hotel_chain_ids, check_customer_ssn, 
    check_employee_ssn, get_rooms_by_filters, process_payment, get_hotel_chain_count, get_hotel_count, delete_booking, update_booking, get_hotel_cities,
    create_customer_account, getTotalRevenue, get_rooms_per_area, get_aggregatedCapacity};