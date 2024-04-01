# CSI2132 E-HOTEL DELIVERABLE PROJECT
Feiyu Lin #300298455 <br>
Christopher Lit #300298516 <br>
Ryan Guo #300294370

# technologies used
- javascript

backend
- postgresql (database)
- node.js
- express (server)

frontend
- html
- react + vite

# how to run
make sure to install the latest version of node.js
## install dependencies
```bash
npm install express pg cors react-router-dom
```


## create database
open psql shell, login to local, and run the following
```bash
CREATE DATABASE ehotels;
\c ehotels;
```

## connect to your local postgresql shell
in <db.js>
```javascript
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ehotels',
    password: '<enter your password here>',
    port: 5432
});

export default pool;
```

## populate with sample data and insert indexing for better performance
- create schema tables using queries from <db_init_queries/init_db.sql><br><br>
- populate with sample data from <db_init_queries/sample_data.sql><br><br>
- run index commands from <db_init_queries/db_indexing.sql>

## to run
frontend
```bash
npm run dev
```
backend
```bash
node server.js
```
run both the frontend and backend concurrently for this app to work <br>
open [http://localhost:5173/](http://localhost:5173/)