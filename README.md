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
## install dependencies
install the latest version of node.js
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

## populate with sample data
after creating the local databse, create schema tables using queries from <db_init_queries/init_db.sql><br><br>
then, populate with sample data from <db_init_queries/sample_data.sql><br><br>

## to run
frontend
```bash
npm run dev
```
backend
```bash
node server.js
```
open [http://localhost:5173/](http://localhost:5173/)

