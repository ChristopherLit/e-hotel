import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ehotels',
    password: '33Videofun8.',
    port: 5432
});

export default pool;
