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

## setup for your local database 
- head to the [<db_init_queries>](https://github.com/ChristopherLit/e-hotel/tree/main/src/db_init_queries) folder to access all the SQL code needed to setup the database
- you can copy paste the SQL code straight into your psql shell
- you MUST execute <init_db.sql> first and <sample_data.sql> last. The other files can be executed in any order

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
open [http://localhost:5173/](http://localhost:5173/) to access our ehotel web app