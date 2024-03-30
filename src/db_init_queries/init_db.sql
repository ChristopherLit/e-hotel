CREATE TABLE hotel_chain (
    chain_id SERIAL PRIMARY KEY,
    office_address VARCHAR(255),
    email VARCHAR(255),
    phone_number BIGINT,
    name VARCHAR(255)
);

CREATE TABLE manager (
    manager_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

CREATE TABLE hotel (
    hotel_id SERIAL PRIMARY KEY,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    number_of_rooms INT,
    name VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    phone_number BIGINT,
    chain_id INT,
    manager_id INT,
    FOREIGN KEY (chain_id) REFERENCES hotel_chain(chain_id),
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);

CREATE TABLE room (
    room_number SERIAL PRIMARY KEY,
    price INT,
    capacity INT,
    sea_view BOOLEAN,
    mountain_view BOOLEAN,
    expandable_bed BOOLEAN,
    hotel_id INT,
    FOREIGN KEY (hotel_id) REFERENCES hotel(hotel_id)
);

CREATE TABLE amenities (
    amenity_id SERIAL PRIMARY KEY,
    amenity VARCHAR(255) 
);

CREATE TABLE problems (
    problem_id SERIAL PRIMARY KEY,
    problem TEXT
);

CREATE TABLE room_amenities (
    room_number INTEGER REFERENCES room(room_number),
    amenity_id INTEGER REFERENCES amenities(amenity_id),
    PRIMARY KEY (room_number, amenity_id)
);

CREATE TABLE room_problems (
    room_number INTEGER REFERENCES room(room_number),
    problem_id INTEGER REFERENCES problems(problem_id),
    PRIMARY KEY (room_number, problem_id)
);

-- Create the 'roles' table
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role VARCHAR(255) NOT NULL
);

-- Create the 'employee' table
CREATE TABLE employee (
    employee_ssn_sin SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);

-- Create the 'works_for' table (assuming a many-to-many relationship between employees and hotels)
CREATE TABLE works_for (
    hotel_id INT NOT NULL,
    employee_ssn_sin INT NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES hotel(hotel_id),
    FOREIGN KEY (employee_ssn_sin) REFERENCES employee(employee_ssn_sin),
    PRIMARY KEY (hotel_id, employee_ssn_sin)
);

-- Create the 'customer' table
CREATE TABLE customer (
    customer_ssn_sin SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    registration_date DATE NOT NULL
);

-- Create the 'booking_renting' table
CREATE TABLE booking_renting (
    booking_renting_id SERIAL PRIMARY KEY,
    renting_status VARCHAR(50), -- could be an ENUM depending on your requirements
    start_date DATE,
    end_date DATE,
    payment NUMERIC, -- Assuming payment is a monetary value
    credit_card BIGINT,
    employee_ssn_sin INT,
    hotel_id INT,
    room_number INT,
    FOREIGN KEY (employee_ssn_sin) REFERENCES employee(employee_ssn_sin)
    FOREIGN KEY (hotel_id) REFERENCES hotel(hotel_id)
    FOREIGN KEY (room_number) REFERENCES room(room_number)
);

-- Create the 'book' table (junction table between customers and booking_renting)
CREATE TABLE book (
    booking_renting_id INT NOT NULL,
    customer_ssn_sin INT NOT NULL,
    FOREIGN KEY (booking_renting_id) REFERENCES booking_renting(booking_renting_id),
    FOREIGN KEY (customer_ssn_sin) REFERENCES customer(customer_ssn_sin),
    PRIMARY KEY (booking_renting_id, customer_ssn_sin)
);

-- Create the 'reserve' table (junction table between booking_renting and room)
CREATE TABLE reserve (
    booking_renting_id INT NOT NULL,
    room_number INT NOT NULL,
    FOREIGN KEY (booking_renting_id) REFERENCES booking_renting(booking_renting_id),
    FOREIGN KEY (room_number) REFERENCES room(room_number),
    PRIMARY KEY (booking_renting_id, room_number)
);