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
-- Additional hotels for Chain 2...

-- Rooms (sample for 1 hotel, replicate similar data for the rest): 
INSERT INTO room (price, capacity, sea_view, mountain_view, expandable_bed, hotel_id)
VALUES
(200, 2, TRUE, FALSE, FALSE, 1),
(250, 3, TRUE, FALSE, TRUE, 1),
(150, 2, FALSE, TRUE, FALSE, 1),
(300, 4, FALSE, TRUE, TRUE, 1),
(100, 1, FALSE, FALSE, FALSE, 1);

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


