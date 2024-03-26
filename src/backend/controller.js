import pool from '../../db.js'; // Update the path to the actual relative path where your db.js file is located

const get_hotel_chain = (req, res) => {
    pool.query('SELECT * FROM hotel_chain', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

const get_hotel = (req, res) => {
    pool.query('SELECT * FROM hotel', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
};

export { get_hotel_chain, get_hotel };
