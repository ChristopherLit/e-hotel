import pool from '../../db.js'; 
import { hotel_chain_query, hotel_chain_by_id_query, hotel_chain_ids_query, hotel_by_filters_query } from './queries.js';

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

    const parsedChainId = parseInt(chain_id, 10);
    const parsedRating = parseInt(rating, 10);

    if (isNaN(parsedChainId) || isNaN(parsedRating)) {
        return res.status(400).json({ error: "Invalid input: chain_id and rating must be integers" });
    }

    pool.query(hotel_by_filters_query, [parsedChainId, `%${address}%`, parsedRating], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};


export { get_hotel_chain, get_hotel_chain_by_id, get_hotel_by_filters, get_hotel_chain_ids};
