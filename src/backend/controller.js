import pool from '../../db.js'; 
import { hotel_chain_query, hotel_chain_by_id_query, hotel_chain_ids_query } from './queries.js';

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

const get_hotel = (req, res) => {
    pool.query('SELECT * FROM hotel', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

export { get_hotel_chain, get_hotel_chain_by_id, get_hotel, get_hotel_chain_ids};
