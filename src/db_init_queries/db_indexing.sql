-- Indexing for the database

-- the biggest performance tasks for our database is filtering available rooms based on user inputted filters.
-- as there can be a lot of filters applied, our query will be lengthy and slow.
-- We will create indexes on the columns that are used in the WHERE clause of our queries.
-- these indexes will help speed up the queries that filter available rooms based on the current booking_renting.
CREATE INDEX idx_booking_renting_customer_ssn ON booking_renting(customer_ssn_sin);
CREATE INDEX idx_booking_renting_hotel_id ON booking_renting(hotel_id);
CREATE INDEX idx_booking_renting_room_number ON booking_renting(room_number);
CREATE INDEX idx_booking_renting_start_date ON booking_renting(start_date);
CREATE INDEX idx_booking_renting_end_date ON booking_renting(end_date);
CREATE INDEX idx_booking_renting_credit_card ON booking_renting(credit_card);