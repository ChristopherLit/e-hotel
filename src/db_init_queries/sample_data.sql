-- test data for hotel_chain table
INSERT INTO hotel_chain (office_address, email, phone_number, name)
VALUES
('123 Main St, New York, NY', 'chain1@example.com', 1234567890, 'Sunrise Hotels'),
('456 Elm St, Los Angeles, CA', 'chain2@example.com', 2345678901, 'Mountain View Hotels'),
('789 Pine St, Chicago, IL', 'chain3@example.com', 3456789012, 'Oceanfront Hotels'),
('101 Maple St, Houston, TX', 'chain4@example.com', 4567890123, 'Urban Retreat Hotels'),
('202 Oak St, Miami, FL', 'chain5@example.com', 5678901234, 'Golden Gate Hotels');

INSERT INTO manager (first_name, last_name)
VALUES
('John', 'Doe'),
('Jane', 'Smith'),
('Emily', 'Johnson'),
('Michael', 'Williams'),
('Sarah', 'Brown'),
('David', 'Jones'),
('Emma', 'Garcia'),
('Daniel', 'Miller'),
('Olivia', 'Martinez'),
('James', 'Davis');

-- Hotels for Chain 1
INSERT INTO hotel (rating, number_of_rooms, name, email, address, phone_number, chain_id, manager_id)
VALUES
(5, 100, 'Hotel 1A', 'hotel1a@chain1.com', 'Beach Blvd, Miami, FL', 1112223333, 1, 1),
(1, 80, 'Hotel 1B', 'hotel1b@chain1.com', 'Mountain Rd, Denver, CO', 2223334444, 1, 2),
(3, 60, 'Hotel 1C', 'hotel1c@chain1.com', 'City St, New York, NY', 3334445555, 1, 3),
(3, 60, 'Hotel 1D', 'hotel1d@chain1.com', 'City St, New York, NY', 4445556666, 1, 4),
(4, 70, 'Hotel 1E', 'hotel1e@chain1.com', 'Beach Blvd, Los Angeles, CA', 5556667777, 1, 5),
(5, 90, 'Hotel 1F', 'hotel1f@chain1.com', 'Mountain Rd, Seattle, WA', 6667778888, 1, 6),
(2, 50, 'Hotel 1G', 'hotel1g@chain1.com', 'City St, Chicago, IL', 7778889999, 1, 7),
(2, 55, 'Hotel 1H', 'hotel1h@chain1.com', 'City St, Houston, TX', 8889990000, 1, 8);

-- Hotels for Chain 2
INSERT INTO hotel (rating, number_of_rooms, name, email, address, phone_number, chain_id, manager_id)
VALUES
(5, 120, 'Hotel 2A', 'hotel2a@chain2.com', 'Beach Blvd, Los Angeles, CA', 5556667777, 2, 5),
(4, 90, 'Hotel 2B', 'hotel2b@chain2.com', 'Mountain Rd, Seattle, WA', 6667778888, 2, 6),
(3, 70, 'Hotel 2C', 'hotel2c@chain2.com', 'City St, Chicago, IL', 7778889999, 2, 7),
(3, 70, 'Hotel 2D', 'hotel2d@chain2.com', 'City St, Chicago, IL', 8889990000, 2, 8),
(5, 110, 'Hotel 2E', 'hotel2e@chain2.com', 'Ocean Ave, Miami, FL', 9990001111, 2, 9),
(4, 80, 'Hotel 2F', 'hotel2f@chain2.com', 'Forest Rd, Portland, OR', 1112223333, 2, 10),
(3, 60, 'Hotel 2G', 'hotel2g@chain2.com', 'Downtown, Dallas, TX', 2223334444, 2, 1),
(2, 50, 'Hotel 2H', 'hotel2h@chain2.com', 'Bay St, San Francisco, CA', 3334445555, 2, 3);

-- Hotels for Chain 3
INSERT INTO hotel (rating, number_of_rooms, name, email, address, phone_number, chain_id, manager_id)
VALUES
(4, 150, 'Hotel 3A', 'hotel3a@chain3.com', 'Beach Blvd, San Francisco, CA', 9990001111, 3, 9),
(3, 100, 'Hotel 3B', 'hotel3b@chain3.com', 'Mountain Rd, Portland, OR', 1234567890, 3, 10),
(2, 80, 'Hotel 3C', 'hotel3c@chain3.com', 'City St, Dallas, TX', 2345678901, 3, 1),
(5, 200, 'Hotel 3D', 'hotel3d@chain3.com', 'City St, Atlanta, GA', 3456789012, 3, 2),
(4, 130, 'Hotel 3E', 'hotel3e@chain3.com', 'Beach Blvd, Miami, FL', 4567890123, 3, 3),
(3, 90, 'Hotel 3F', 'hotel3f@chain3.com', 'Mountain Rd, Seattle, WA', 5678901234, 3, 4),
(2, 70, 'Hotel 3G', 'hotel3g@chain3.com', 'City St, Chicago, IL', 6789012345, 3, 5),
(4, 150, 'Hotel 3H', 'hotel3h@chain3.com', 'City St, Houston, TX', 7890123456, 3, 6);

-- Hotels for Chain 4
INSERT INTO hotel (rating, number_of_rooms, name, email, address, phone_number, chain_id, manager_id)
VALUES
(5, 130, 'Hotel 4A', 'hotel4a@chain4.com', 'Beach Blvd, Miami, FL', 1112223333, 4, 1),
(4, 100, 'Hotel 4B', 'hotel4b@chain4.com', 'Mountain Rd, Denver, CO', 2223334444, 4, 2),
(3, 70, 'Hotel 4C', 'hotel4c@chain4.com', 'City St, New York, NY', 3334445555, 4, 3),
(3, 70, 'Hotel 4D', 'hotel4d@chain4.com', 'City St, New York, NY', 4445556666, 4, 4),
(5, 140, 'Hotel 4E', 'hotel4e@chain4.com', 'Beach Blvd, Los Angeles, CA', 5556667777, 4, 5),
(4, 110, 'Hotel 4F', 'hotel4f@chain4.com', 'Mountain Rd, Seattle, WA', 6667778888, 4, 6),
(3, 80, 'Hotel 4G', 'hotel4g@chain4.com', 'City St, Chicago, IL', 7778889999, 4, 7),
(2, 60, 'Hotel 4H', 'hotel4h@chain4.com', 'City St, Houston, TX', 8889990000, 4, 8);

-- Hotels for Chain 5
INSERT INTO hotel (rating, number_of_rooms, name, email, address, phone_number, chain_id, manager_id)
VALUES
(4, 180, 'Hotel 5A', 'hotel5a@chain5.com', 'Beach Blvd, Los Angeles, CA', 5556667777, 5, 5),
(3, 120, 'Hotel 5B', 'hotel5b@chain5.com', 'Mountain Rd, Seattle, WA', 6667778888, 5, 6),
(2, 90, 'Hotel 5C', 'hotel5c@chain5.com', 'City St, Chicago, IL', 7778889999, 5, 7),
(5, 220, 'Hotel 5D', 'hotel5d@chain5.com', 'City St, Houston, TX', 8889990000, 5, 8),
(4, 200, 'Hotel 5E', 'hotel5e@chain5.com', 'Beach Blvd, Miami, FL', 9990001111, 5, 9),
(3, 150, 'Hotel 5F', 'hotel5f@chain5.com', 'Mountain Rd, Denver, CO', 1112223333, 5, 10),
(2, 100, 'Hotel 5G', 'hotel5g@chain5.com', 'City St, New York, NY', 2223334444, 5, 9),
(4, 180, 'Hotel 5H', 'hotel5h@chain5.com', 'City St, San Francisco, CA', 3334445555, 5, 2);

-- Rooms for hotel chain 1
INSERT INTO room (price, capacity, sea_view, mountain_view, expandable_bed, hotel_id)
VALUES
(200, 5, TRUE, FALSE, FALSE, 1),
(250, 3, TRUE, FALSE, TRUE, 1),
(150, 2, FALSE, TRUE, FALSE, 1),
(300, 4, FALSE, TRUE, TRUE, 1),
(100, 1, FALSE, FALSE, FALSE, 1);

-- Rooms for hotel chain 2
INSERT INTO room (price, capacity, sea_view, mountain_view, expandable_bed, hotel_id)
VALUES
(200, 2, TRUE, FALSE, FALSE, 2),
(250, 3, TRUE, FALSE, TRUE, 2),
(150, 5, FALSE, TRUE, FALSE, 2),
(300, 4, FALSE, TRUE, TRUE, 2),
(100, 1, FALSE, FALSE, FALSE, 2);

-- Rooms for hotel chain 3
INSERT INTO room (price, capacity, sea_view, mountain_view, expandable_bed, hotel_id)
VALUES
(230, 2, TRUE, FALSE, FALSE, 3),
(280, 3, TRUE, FALSE, TRUE, 3),
(180, 5, FALSE, TRUE, FALSE, 3),
(330, 4, FALSE, TRUE, TRUE, 3),
(130, 1, FALSE, FALSE, FALSE, 3);

-- Rooms for hotel chain 4
INSERT INTO room (price, capacity, sea_view, mountain_view, expandable_bed, hotel_id)
VALUES
(260, 2, TRUE, FALSE, FALSE, 4),
(310, 3, TRUE, FALSE, TRUE, 4),
(210, 5, FALSE, TRUE, FALSE, 4),
(360, 4, FALSE, TRUE, TRUE, 4),
(160, 1, FALSE, FALSE, FALSE, 4);

-- Rooms for hotel chain 5
INSERT INTO room (price, capacity, sea_view, mountain_view, expandable_bed, hotel_id)
VALUES
(260, 2, TRUE, FALSE, FALSE, 5),
(310, 3, TRUE, FALSE, TRUE, 5),
(210, 5, FALSE, TRUE, FALSE, 5),
(360, 4, FALSE, TRUE, TRUE, 5),
(160, 1, FALSE, FALSE, FALSE, 5);

-- ammenities
INSERT INTO amenities (amenity)
VALUES
('WiFi'),
('Air Conditioning'),
('Mini Bar'),
('Room Service'),
('Gym Access');

-- room_amenities
INSERT INTO room_amenities (room_number, amenity_id)
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4);

-- problems
INSERT INTO problems (problem)
VALUES
('Leaky Faucet'),
('Broken TV'),
('Malfunctioning AC'),
('Noisy Neighbors'),
('Stained Carpet');

-- room_problems
INSERT INTO room_problems (room_number, problem_id)
VALUES
(1, 1),
(1, 2);

-- Populate the 'roles' table
INSERT INTO roles (role)
VALUES
('Manager'),
('Front Desk Staff'),
('Housekeeping'),
('Maintenance');

-- Populate the 'employee' table
INSERT INTO employee (first_name, last_name, address)
VALUES
('Crundee', 'Yasuo', '45 Mann Ave'),
('Dotroy', 'Hum', '456 Elm St'),
('August', 'Lin', '789 Oak St');

-- Populate the 'works_for' table
INSERT INTO works_for (hotel_id, employee_ssn_sin)
VALUES
(1, 1),
(2, 2),
(3, 3);

-- Populate the 'customer' table
INSERT INTO customer (first_name, last_name, registration_date)
VALUES
('Alice', 'Johnson', '2024-03-29'),
('Bob', 'Williams', '2024-03-30'),
('Charlie', 'Brown', '2024-04-01');

-- Populate the 'booking_renting' table
INSERT INTO booking_renting (renting_status, start_date, end_date, checkin_date, checkout_date, payment, employee_ssn_sin)
VALUES
('Booked', '2024-04-01', '2024-04-05', '2024-04-01', '2024-04-05', 500.00, 1),
('Checked In', '2024-04-02', '2024-04-06', '2024-04-02', '2024-04-06', 600.00, 1),
('Checked Out', '2024-04-03', '2024-04-07', '2024-04-03', '2024-04-07', 700.00, 1);

-- Populate the 'book' table
INSERT INTO book (booking_renting_id, customer_ssn_sin)
VALUES
(1, 1),
(2, 2),
(3, 3);

-- Populate the 'reserve' table
INSERT INTO reserve (booking_renting_id, room_number)
VALUES
(1, 1),
(2, 3),
(3, 2);