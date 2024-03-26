# how to run
## install dependencies
```bash
npm i
```
```bash
npm install express pg cors
```

## create database and populate with data
open psql shell login to local and run the following
```bash
CREATE DATABASE ehotels
\c ehotels
```
after creating the local databse, create schema tables using queries from <db_init_queries/init_db.sql><br><br>
then, populate with sample data from <db_init_queries/sample_data.sql>

## to run
frontend
```bash
npm run dev
```
backend
```bash
node server.js
```

