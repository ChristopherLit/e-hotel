import pool from '../../db.js';
import { hotel_chain_query, hotel_chain_by_id_query, hotel_chain_ids_query, customer_ssn_query, employee_ssn_query, room_query } from './queries.js';


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
            WHERE start_date <= $${queryParams.length + 2} AND end_date >= $${queryParams.length + 1}
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

export { get_hotel_chain, get_hotel_chain_by_id, get_hotel_by_filters, get_hotel_chain_ids, check_customer_ssn, check_employee_ssn, get_rooms_by_filters };